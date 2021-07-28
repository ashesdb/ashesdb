declare namespace ashesdb {
	interface AllocatedPoints {
		perTier: number[];
		perTierCumulative: number[];
		perTree: number[];
		total: number;
	}

	interface Archetype {
		id: string;
		name: string;
		description: string;
		skillTreesLayout?: SkillTreeLayout[];
		orderedSkills?: string[];
	}

	interface Build {
		archetypeId: string;
		pointsPerSkill: { [k: string]: number };
	}

	interface Skill {
		kind: string;
		id: string;
		name: string;
		icon: string;
		cost: number;
		ranks: string[];
	}

	interface SkillTree {
		id: string;
		name: string;
		color: string;
	}

	interface SkillTreeLayout {
		id: string;
		skills: string[][];
	}
}
