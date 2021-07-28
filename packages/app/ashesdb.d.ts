declare namespace ashesdb {
	interface Archetype {
		id: string;
		name: string;
		description: string;
		skillTreesLayout?: SkillTreeLayout[];
		orderedSkills?: string[];
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
