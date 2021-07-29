import { skillTierThresholds } from '../data';
import { archetypesById } from '../data/archetypes';
import { skillsById } from '../data/skills';

import getAllocatedPoints from './getAllocatedPoints';

export default function alterBuild(build: ashesdb.Build, skillId: string, delta: 1 | -1): ashesdb.Build {
	const skill = skillsById[skillId];
	if (!skill) {
		throw new Error(`Skill "${skillId}" is not valid.`);
	}

	const archetype = archetypesById[build.archetypeId];
	if (!archetype) {
		throw new Error(`Invalid archetype "${build.archetypeId}" specified.`)
	}

	if (!archetype.skillTreesLayout) {
		throw new Error(`Archetype "${archetype.id}" is currently not supported.`);
	}

	const skillTier = Math.max(...archetype.skillTreesLayout.map(tree => (
		tree.skills.findIndex(tier => tier.includes(skill.id))
	)));
	if (skillTier === -1) {
		throw new Error(`Archetype "${archetype.id}" does not have skill "${skill.name}".`);
	}

	const currentPoints = build.pointsPerSkill[skill.id];
	if (currentPoints === 0 && delta === -1) {
		throw new Error(`Skill "${skill.name}" is already at 0 points.`);
	}
	if (currentPoints === skill.ranks.length && delta === 1) {
		throw new Error(`Skill "${skill.name}" is already at its maximum rank.`);
	}

	const allocatedPoints = getAllocatedPoints(build);

	if (delta === 1) {
		const isTierUnlocked = new Array(skillTier + 1).fill(0).every((_v, t) => (
			(allocatedPoints.perTierCumulative[t - 1] || 0) >= skillTierThresholds[t]
		));
		if (!isTierUnlocked) {
			throw new Error(`Skill "${skill.name}" is on a tier that is not unlocked yet.`)
		}
	}

	if (delta === -1) {
		const adjustedPerTier = allocatedPoints.perTierCumulative.map((t, i) => (
			i >= skillTier ? t - skill.cost : t
		));
		const canRemovePoint = skillTierThresholds.every((n, t) => (
			allocatedPoints.perTier[t] === 0
			|| (adjustedPerTier[t - 1] || 0) >= n
		));
		if (!canRemovePoint) {
			throw new Error(`Removing a point from "${skill.name}" is not possible since it would lock a tier with points allocated.`);
		}
	}

	return {
		...build,
		pointsPerSkill: {
			...build.pointsPerSkill,
			[skill.id]: currentPoints + delta,
		},
	};
}
