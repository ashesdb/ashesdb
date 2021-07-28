export function getOrderedSkills(layout: ashesdb.SkillTreeLayout[]): string[] {
	return layout.reduce((acc1, tree) => (
		tree.skills.reduce((acc2, tier) => (
			tier.reduce((acc3, skillId) => [...acc3, skillId], acc2)
		), acc1)
	), [] as string[]);
}
