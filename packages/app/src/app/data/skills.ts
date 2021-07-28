import iconAttackDamage from './assets/skills/attack-damage.png';
import iconBlackHole from './assets/skills/black-hole.jpg';
import iconBlink from './assets/skills/blink.jpg';
import iconCooldownReduction from './assets/skills/cooldown-reduction.png';
import iconCriticalHitDamage from './assets/skills/critical-hit-damage.png';
import iconCriticalHitRate from './assets/skills/critical-hit-rate.png';
import iconDefenseMitigation from './assets/skills/defense-mitigation.png';
import iconDisableChance from './assets/skills/disable-chance.png';
import iconDrainEssence from './assets/skills/drain-essence.jpg';
import iconFireball from './assets/skills/fireball.jpg';
import iconGiftOfTheMagi from './assets/skills/gift-of-the-magi.jpg';
import iconHealthRegeneration from './assets/skills/health-regeneration.png';
import iconLavastorm from './assets/skills/lavastorm.jpg';
import iconManaRegeneration from './assets/skills/mana-regeneration.png';
import iconMaximumHealth from './assets/skills/maximum-health.png';
import iconMeteorStorm from './assets/skills/meteor-storm.jpg';
import iconMovementSpeed from './assets/skills/movement-speed.png';
import iconPrismaticBeam from './assets/skills/prismatic-beam.jpg';
import iconThundershock from './assets/skills/thundershock.jpg';

export const skillTreesById: { [k: string]: ashesdb.SkillTree } = {
	active: {
		id: 'active',
		name: 'Active',
		color: '#747030',
	},
	passive: {
		id: 'passive',
		name: 'Passive',
		color: '#266786'
	},
};

export const skillsById: { [k: string]: ashesdb.Skill } = {
	'black-hole': {
		kind: 'active',
		id: 'black-hole',
		name: 'Black Hole',
		icon: iconBlackHole,
		cost: 1,
		ranks: [
			'Summons a black hole at the target location that slowly pulls in enemy targets. Increases in pull strength the closer your target is to the center.',
			'Snares targets after pull.',
			'Black hole explodes at the end of the pull duration dealing damage.',
		],
	},
	blink: {
		kind: 'active',
		id: 'blink',
		name: 'Blink',
		icon: iconBlink,
		cost: 1,
		ranks: [
			'Blinks forward in the direction you are traveling.',
			'Increased blink distance. Reduces threat on targets nearby upon activation.',
			'Increased blink distance. Deals area damage upon impact.',
		],
	},
	'drain-essence': {
		kind: 'active',
		id: 'drain-essence',
		name: 'Drain Essence',
		icon: iconDrainEssence,
		cost: 1,
		ranks: [
			'Drains the life force of your target, dealing damage over time and restoring your mana.',
			'Increase damage and mana conversion percentage.',
			'Deplete targets near to your foe.',
		],
	},
	fireball: {
		kind: 'active',
		id: 'fireball',
		name: 'Fireball',
		icon: iconFireball,
		cost: 1,
		ranks: [
			'Throws a fireball at your target, dealing direct damage.',
			'Becomes a burn (damage over time).',
			'Area of effect around the target.',
		],
	},
	'gift-of-the-magi': {
		kind: 'active',
		id: 'gift-of-the-magi',
		name: 'Gift of the Magi',
		icon: iconGiftOfTheMagi,
		cost: 1,
		ranks: [
			'Restores mana over time to you or your friendly target.',
			'Increased amount of mana transferred. Increased mana transfer efficiency.',
			'Increased amount of mana transferred. Increased mana transfer efficiency.',
		],
	},
	lavastorm: {
		kind: 'active',
		id: 'lavastorm',
		name: 'Lavastorm',
		icon: iconLavastorm,
		cost: 1,
		ranks: [
			'Creates a field of lava at the selected location. Deals area damage over time.',
			'Increased damage. Increased duration.',
			'Increased damage. Increased duration.',
		],
	},
	'meteor-storm': {
		kind: 'active',
		id: 'meteor-storm',
		name: 'Meteor Storm',
		icon: iconMeteorStorm,
		cost: 1,
		ranks: [
			'Summons forth a meteor storm, dropping 3 meteors in the target location. Each meteor deals large area damage upon impact.',
			'Increase damage and number of impacts. Stun enemies as they are hit.',
			'Increase damage and number of impacts. Stun enemies as they are hit.',
		],
	},
	'prismatic-beam': {
		kind: 'active',
		id: 'prismatic-beam',
		name: 'Prismatic Beam',
		icon: iconPrismaticBeam,
		cost: 1,
		ranks: [
			'Summons a giant prismatic beam of energy. Deals extremely large damage and snares all targets caught inside.',
			'Damages over time after channel.',
			'Damages enemies between caster and target in a cone.',
		],
	},
	thundershock: {
		kind: 'active',
		id: 'thundershock',
		name: 'Thundershock',
		icon: iconThundershock,
		cost: 1,
		ranks: [
			'Shoots forward a beam of lightning from your hand. Deals instant damages and knocks down enemy targets.',
			'Adds damage over time to targets hit.',
			'Chains to nearby enemies that are not hit. Anyone who is outside the line has a chance to get a bolt jump to them.'
		],
	},
	'attack-damage': {
		kind: 'passive',
		id: 'attack-damage',
		name: 'Attack Damage',
		icon: iconAttackDamage,
		cost: 2,
		ranks: ['Increases attack damage by 5.'],
	},
	'cooldown-reduction': {
		kind: 'passive',
		id: 'cooldown-reduction',
		name: 'Cooldown Reduction',
		icon: iconCooldownReduction,
		cost: 2,
		ranks: ['Reduce all ability cooldowns by 5%.'],
	},
	'critical-hit-damage': {
		kind: 'passive',
		id: 'critical-hit-damage',
		name: 'Critical Hit Damage',
		icon: iconCriticalHitDamage,
		cost: 2,
		ranks: ['Increase the damage and healing bonus from critical hits by 20%.'],
	},
	'critical-hit-rate': {
		kind: 'passive',
		id: 'critical-hit-rate',
		name: 'Critical Hit Rate',
		icon: iconCriticalHitRate,
		cost: 2,
		ranks: ['Increase the chance for damage and healing abilities to critically hit by 5%.'],
	},
	'defense-mitigation': {
		kind: 'passive',
		id: 'defense-mitigation',
		name: 'Defense Mitigation',
		icon: iconDefenseMitigation,
		cost: 2,
		ranks: ['Increase defense mitigation by 4.'],
	},
	'disable-chance': {
		kind: 'passive',
		id: 'disable-chance',
		name: 'Disable Chance',
		icon: iconDisableChance,
		cost: 2,
		ranks: ['Increase chance to disable by 15%.'],
	},
	'health-regeneration': {
		kind: 'passive',
		id: 'health-regeneration',
		name: 'Health Regeneration',
		icon: iconHealthRegeneration,
		cost: 2,
		ranks: ['Generate an additional 15% of your maximum health per second.'],
	},
	'mana-regeneration': {
		kind: 'passive',
		id: 'mana-regeneration',
		name: 'Mana Regeneration',
		icon: iconManaRegeneration,
		cost: 2,
		ranks: ['Generate an additional 1% of your maximum mana per second.'],
	},
	'maximum-health': {
		kind: 'passive',
		id: 'maximum-health',
		name: 'Maximum Health',
		icon: iconMaximumHealth,
		cost: 2,
		ranks: ['Increase maximum health by 7%.'],
	},
	'movement-speed': {
		kind: 'passive',
		id: 'movement-speed',
		name: 'Movement Speed',
		icon: iconMovementSpeed,
		cost: 2,
		ranks: ['Increase movement speed by 5%.'],
	},
};
