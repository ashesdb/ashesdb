export type FullTree = {
	abilities: Record<string, Ability>;
	nodes: Record<string, Node>;
	skills: Record<string, Skill>;
	skillRanks: Record<string, SkillRank>;
	slots: Record<string, Slot>;
	tree: Tree;
};

export type Ability = {
	id: string;
	description: string;
	icon: string;
	name: string;
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

export type Skill = {
	id: string;
	skillRankIds: string[];
};

export type BaseSkillRank = {
	id: string;
};

export type AbilitySkillRank = BaseSkillRank & {
	abilityId: string;
	skillPointCost: number;
};

export type EffectSkillRank = BaseSkillRank & {
	effectId: string;
	skillPointCost: number;
};

export type SkillRank = AbilitySkillRank | EffectSkillRank;

export type Slot = {
	id: string;
	skillIds: string[];
};

export type Tree = {
	id: string;
	name: string;
	autoGranted: {
		nodeId: string;
	}[];
	nodes: {
		nodeId: string;
		x: number;
		y: number;
	}[];
};
