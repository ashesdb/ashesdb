import { useMemo } from 'react';

import type { Connector } from '../types';
import css from './Connector.module.css';

type Props = {
	connector: Connector;
	maxCoords: { x: number; y: number };
	occupiedCoords: Record<string, boolean>;
};

export function Connector({ connector, maxCoords, occupiedCoords }: Props) {
	const instructions = useMemo(() => {
		const { from: f, to: t } = connector;
		const d: string[] = [];
		let x = 0;
		let y = 0;

		if (t.y < f.y && !occupiedCoords[`${f.x}.${f.y - 1}`]) {
			x = f.x * 60 + 30;
			y = (maxCoords.y - f.y) * 60 + 52;
			d.push(`M${x},${y}`);

			y = (maxCoords.y - t.y) * 60 + 30;
			d.push(`${x},${y}`);

			x = t.x * 60 + 8;
			d.push(`${x},${y}`);

			return d;
		}

		if (t.x < f.x) {
			const sibling = `${f.x + 1}.${f.y}`;
			const dest = `${t.x}.${t.y}`;
			if (occupiedCoords[`${f.x - 1}.${f.y}`] && sibling !== dest) {
				x = f.x * 60 + 30;
				y = (maxCoords.y - f.y) * 60 + 8;
				d.push(`M${x},${y}`);

				y = (maxCoords.y - f.y) * 60;
				d.push(`${x},${y}`);
			} else {
				x = f.x * 60 + 8;
				y = (maxCoords.y - f.y) * 60 + 30;
				d.push(`M${x},${y}`);
			}

			if (t.y > f.y) {
				x = t.x * 60 + 30;
				d.push(`${x},${y}`);

				y = (maxCoords.y - t.y) * 60 + 52;
				d.push(`${x},${y}`);
			} else if (t.y < f.y) {
				x = t.x * 60 + 30;
				d.push(`${x},${y}`);

				y = (maxCoords.y - t.y) * 60 + 8;
				d.push(`${x},${y}`);
			} else {
				x = t.x * 60 + 52;
				d.push(`${x},${y}`);
			}

			return d;
		}

		if (t.x > f.x) {
			const sibling = `${f.x + 1}.${f.y}`;
			const dest = `${t.x}.${t.y}`;
			if (occupiedCoords[sibling] && sibling !== dest) {
				x = f.x * 60 + 30;
				y = (maxCoords.y - f.y) * 60 + 8;
				d.push(`M${x},${y}`);

				y = (maxCoords.y - f.y) * 60;
				d.push(`${x},${y}`);
			} else {
				x = f.x * 60 + 52;
				y = (maxCoords.y - f.y) * 60 + 30;
				d.push(`M${x},${y}`);
			}

			if (t.y > f.y) {
				x = t.x * 60 + 30;
				d.push(`${x},${y}`);

				y = (maxCoords.y - t.y) * 60 + 52;
				d.push(`${x},${y}`);
			} else if (t.y < f.y) {
				x = t.x * 60 + 30;
				d.push(`${x},${y}`);

				y = (maxCoords.y - t.y) * 60 + 8;
				d.push(`${x},${y}`);
			} else {
				x = t.x * 60 + 8;
				d.push(`${x},${y}`);
			}

			return d;
		}

		x = f.x * 60 + 30;
		y = (maxCoords.y - f.y) * 60 + 8;
		d.push(`M${x},${y}`);

		y = (maxCoords.y - t.y) * 60 + 52;
		d.push(`${x},${y}`);

		return d;
	}, [connector, maxCoords, occupiedCoords]);

	return <path className={css.connector} d={instructions.join(' ')} />;
}
