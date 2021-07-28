import { archetypesById } from '..//data/archetypes';

const buildStringRegex = /^(?:([a-z]+)\/?(0)?(?::([0-3]+))?)?$/;

export default function parseBuildString(buildString: string): ashesdb.Build {
	if (buildString === '') {
		return { archetypeId: '', pointsPerSkill: {} };
	}

	const m = buildString.match(buildStringRegex);
	if (!m) {
		throw new Error('Given build string is not valid.');
	}

	const archetype = archetypesById[m[1]];
	if (!archetype) {
		throw new Error(`Invalid archetype "${m[1]}" specified.`);
	}

	if (!archetype.orderedSkills) {
		throw new Error(`Archetype "${m[1]}" is currently not supported.`);
	}

	const points = (m[3] || '').split('').map(p => parseInt(p, 10));
	const pointsPerSkill = archetype.orderedSkills.reduce((acc, skillId, i) => ({
		...acc,
		[skillId]: points[i] || 0,
	}), {});

	return {
		archetypeId: archetype.id,
		pointsPerSkill,
	};
}
