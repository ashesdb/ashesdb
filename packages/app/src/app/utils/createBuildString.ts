import { archetypesById } from '../data/archetypes';

export default function createBuildString(build: ashesdb.Build): string {
	const archetype = archetypesById[build.archetypeId];
	if (!archetype || !archetype.orderedSkills) {
		return '';
	}

	if (!Object.values(build.pointsPerSkill).some(p => !!p)) {
		return archetype.id;
	}

	const pointsString = archetype.orderedSkills.map(skillId => build.pointsPerSkill[skillId]).join('');
	return `${archetype.id}/0:${pointsString}`;
}
