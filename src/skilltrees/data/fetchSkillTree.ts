import { fetchData } from '~/core/data';

type Coords = {
	x: number;
	y: number;
};

export type BaseNode = {
	id: string;
	isAutoGranted: boolean;
	levelRequirement: number;
	pointRequirement: number;
	skillsRequirement?: string[];
};

export type ProfessionNode = BaseNode & {
	professionId: string;
};

export type SkillNode = BaseNode & {
	skillId: string;
};

export type SlotNode = BaseNode & {
	slotId: string;
};

export type Node = ProfessionNode | SkillNode | SlotNode;

export type BaseRequirement = {
	id: string;
	pointRequirement: number;
};

export type NodeRequirement = BaseRequirement & {
	nodeId: string;
};

export type SkillRequirement = BaseRequirement & {
	skillId: string;
};

export type Requirement = NodeRequirement | SkillRequirement;

type Slot = {
	id: string;
	skillIds: string[];
};

export type SkillTree = {
	backdrop: string;
	displayName: string;
	name: string;
	autoGranted: string[];
	coords: Record<string, Coords>;
	nodes: Record<string, Node>;
	requirements: Record<string, Requirement>;
	slots: Record<string, Slot>;
};

export async function fetchSkillTree(archetype: string) {
	const res = await fetchData(`/skilltrees/archetypes/${archetype}.json`);
	if (!res.ok) {
		throw new Error(`Request failed: ${res.status}`);
	}

	const data: SkillTree = await res.json();
	return data;
}
