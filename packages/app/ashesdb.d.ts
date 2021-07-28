declare namespace ashesdb {
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
}
