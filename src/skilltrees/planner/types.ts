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
	requiredNodes?: string[];
};
