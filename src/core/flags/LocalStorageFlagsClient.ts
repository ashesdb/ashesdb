import { isObject } from '~/core/helpers';

import type { FlagsClient, Listener } from './types';

export class LocalStorageFlagsClient implements FlagsClient {
	private cachedFlags: Record<string, boolean>;
	private listeners: Record<string, Listener[]>;
	private storageKey: string;

	constructor(storageKey: string) {
		this.cachedFlags = {};
		this.listeners = {};
		this.storageKey = storageKey;

		this.load();
		this.listen();
	}

	public get(name: string) {
		return this.cachedFlags[name] || false;
	}

	public subscribe(name: string, listener: Listener) {
		if (!this.listeners[name]) {
			this.listeners[name] = [];
		}

		this.listeners[name].push(listener);

		return () => {
			this.listeners[name] = this.listeners[name].filter((l) => l !== listener);
			if (!this.listeners[name].length) {
				delete this.listeners[name];
			}
		};
	}

	private listen() {
		window.addEventListener('storage', (e: StorageEvent) => {
			if (e.key !== this.storageKey || !e.newValue) return;
			this.parse(e.newValue, true);
		});
	}

	private load() {
		try {
			const raw = localStorage.getItem(this.storageKey);
			if (!raw) return;
			this.parse(raw);
		} catch (err: unknown) {
			console.error('Failed to load flags from localstorage', err);
		}
	}

	private notify(name: string) {
		if (!this.listeners[name]) return;

		this.listeners[name].forEach((listener) => {
			listener(this.cachedFlags[name] || false);
		});
	}

	private parse(raw: string, shouldNotify?: boolean) {
		try {
			const json = JSON.parse(raw);
			if (!isObject(json)) return;

			Object.entries(json)
				.map(([name, value]) => {
					let v: boolean | null = null;
					if (value === true || value === false) v = value;
					if (value === 1) v = true;
					if (value === 0) v = false;
					if (value === 'true') v = true;
					if (value === 'false') v = false;
					if (value === '1') v = true;
					if (value === '0') v = false;
					return [name, v];
				})
				.filter(
					(entry): entry is [string, boolean] =>
						entry[1] === true || entry[1] === false,
				)
				.forEach(([name, value]) => {
					this.cachedFlags[name] = value;
					if (shouldNotify) this.notify(name);
				});
		} catch (err: unknown) {
			console.error('Failed to parse flags string', err);
		}
	}
}
