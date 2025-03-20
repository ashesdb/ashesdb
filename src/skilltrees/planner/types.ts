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
	description: string;
	icon?: string;
	name: string;
	requiredNodes?: string[];
	requiredPoints: number;
	type: 'ability' | 'choice' | 'effect';
};

export type OnClickNode = (e: MouseEvent) => void;
