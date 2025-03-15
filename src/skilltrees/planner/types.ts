export type Connector = {
	from: {
		x: number;
		y: number;
	};
	to: {
		x: number;
		y: number;
	};
};

export type Node = {
	id: string;
	coords: {
		x: number;
		y: number;
	};
	requiredNodes?: string[];
};
