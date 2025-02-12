export interface FlagsClient {
	get: (name: string) => boolean;
	subscribe: (name: string, listener: Listener) => Unsubscriber;
}

export type Listener = (value: boolean) => void;
export type Unsubscriber = () => void;
