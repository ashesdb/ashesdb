import type { MouseEvent } from 'react';

export type Connector = {
	from: Coords;
	to: Coords;
};

export type Coords = {
	x: number;
	y: number;
};

export type Node = {
	id: string;
	coords?: Coords;
	icon?: string;
	requiredNodes?: string[];
	type: 'ability' | 'choice' | 'effect';
};

export type OnClickNode = (e: MouseEvent) => void;
