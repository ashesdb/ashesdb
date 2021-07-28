function getOrderedSkills(layout: ashesdb.SkillTreeLayout[]): string[] {
	return layout.reduce((acc1, tree) => (
		tree.skills.reduce((acc2, tier) => (
			tier.reduce((acc3, skillId) => [...acc3, skillId], acc2)
		), acc1)
	), [] as string[]);
}

const skillTreesLayouts: { [k: string]: ashesdb.SkillTreeLayout[] } = {
	mage: [
		{
			id: 'passive',
			skills: [
				['attack-damage', 'mana-regeneration'],
				['critical-hit-damage', 'health-regeneration', 'critical-hit-rate'],
				['maximum-health', 'defense-mitigation'],
				['disable-chance', 'cooldown-reduction', 'movement-speed'],
			],
		},
		{
			id: 'active',
			skills: [
				['fireball', 'blink'],
				['lavastorm', 'drain-essence'],
				['black-hole', 'gift-of-the-magi', 'thundershock'],
				['meteor-storm', 'prismatic-beam'],
			],
		},
	],
};

export const archetypes: ashesdb.Archetype[] = [
	{
		id: 'tank',
		name: 'Tank',
		description: 'A tank\'s job is to control a fight, to help the party mitigate incoming damage, and to dictate who is getting hit. They can take an unconscionable amount of punishment, and woe to those who ignore their commands.',
	},
	{
		id: 'fighter',
		name: 'Fighter',
		description: 'The fighter is an expert in physical combat. A master of many weapons, this warrior strikes fear into the heart of his foes.',
	},
	{
		id: 'rogue',
		name: 'Rogue',
		description: 'The rogue is master of opportunity, using skill, positioning, and the environment to dish out frightening amounts of damage. In their downtime, they provide solid utility, helping their friends navigate dangers otherwise unseen.',
	},
	{
		id: 'ranger',
		name: 'Ranger',
		description: 'Death from afar is the Ranger\'s raison d\'etre. A master of the bow and ranged combat, the Ranger is more than happy to let others get their hands dirty. No one else has such a keen eye in natural environments.',
	},
	{
		id: 'mage',
		name: 'Mage',
		description: 'In a world of high magic, no party would be complete without a Mage. Masters of the arcane, they bring terrible elements to bear in devastating spells. If reality needs challenging in some fashion, ask a Mage to help.',
		skillTreesLayout: skillTreesLayouts.mage,
		orderedSkills: getOrderedSkills(skillTreesLayouts.mage),
	},
	{
		id: 'cleric',
		name: 'Cleric',
		description: 'In such a dangerous world, a Cleric is never wanting for friends. They can protect their allies in a number of ways, and when necessary, snuff the life out of others. Masters over the very essence of life, they can sense the broken and corrupted.',
	},
	{
		id: 'summoner',
		name: 'Summoner',
		description: 'The summoner is never alone. Two hands are good, but in the Summoner\'s opinion, four hands are always better. With the right tool for every job, there\'s no situation they can\'t handle.',
	},
	{
		id: 'bard',
		name: 'Bard',
		description: 'Truly a force multiplier, the Bard weaves songs of glory and conquest, inspiring his comrades to ever greater heights. The Bard knows secret and powerful words, able to speak into being terrible nightmares, or to convince foes to become friends.',
	},
];

export const archetypesById = archetypes.reduce(
	(acc, archetype) => ({ ...acc, [archetype.id]: archetype }),
	{} as { [k: string]: ashesdb.Archetype },
);
