import { archetypesById } from '../data/archetypes';
import { skillsById } from '../data/skills';

export default function getAllocatedPoints(build: ashesdb.Build): ashesdb.AllocatedPoints {
	const archetype = archetypesById[build.archetypeId];
	if (!archetype || !archetype.skillTreesLayout) {
		return { perTier: [], perTierCumulative: [], perTree: [], total: 0 };
	}

	const perRow = archetype.skillTreesLayout.map(tree => (
		tree.skills.map(tier => tier.reduce((n, skillId) => (
			n + ((build.pointsPerSkill[skillId] || 0) * skillsById[skillId].cost)
		), 0))
	));

	const perTree = perRow.map(tree => (
		tree.reduce((n, tier) => n + tier, 0)
	));

	const perTier = [0, 1, 2, 3].map(tier => (
		perRow.reduce((n, tree) => n + tree[tier], 0)
	));

	const perTierCumulative = perTier.reduce((n, tier, i) => (
		[...n, (n[i - 1] || 0) + tier]
	), [] as number[])

	const total = perTree.reduce((n, tree) => n + tree, 0);

	return { perTier, perTierCumulative, perTree, total };
}
