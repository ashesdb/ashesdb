import iconAttackDamage from './assets/skills/attack-damage.png';
import iconBlackHole from './assets/skills/black-hole.jpg';
import iconBlink from './assets/skills/blink.jpg';
import iconBlockChance from './assets/skills/block-chance.png';
import iconBulwark from './assets/skills/bulwark.jpg';
import iconCastigation from './assets/skills/castigation.jpg';
import iconCooldownReduction from './assets/skills/cooldown-reduction.png';
import iconCriticalHitDamage from './assets/skills/critical-hit-damage.png';
import iconCriticalHitRate from './assets/skills/critical-hit-rate.png';
import iconDefenseMitigation from './assets/skills/defense-mitigation.png';
import iconDevotion from './assets/skills/devotion.jpg';
import iconDisableChance from './assets/skills/disable-chance.png';
import iconDisableDefense from './assets/skills/disable-defense.png';
import iconDivineCensure from './assets/skills/divine-censure.jpg';
import iconDivineLight from './assets/skills/divine-light.jpg';
import iconDrainEssence from './assets/skills/drain-essence.jpg';
import iconFireball from './assets/skills/fireball.jpg';
import iconGiftOfTheMagi from './assets/skills/gift-of-the-magi.jpg';
import iconHallowedGround from './assets/skills/hallowed-ground.jpg';
import iconHealingReceived from './assets/skills/healing-received.png';
import iconHealthRegeneration from './assets/skills/health-regeneration.png';
import iconIncreasedHealing from './assets/skills/increased-healing.png';
import iconJavelin from './assets/skills/javelin.jpg';
import iconJudgment from './assets/skills/judgment.jpg';
import iconLacerate from './assets/skills/lacerate.jpg';
import iconLavastorm from './assets/skills/lavastorm.jpg';
import iconManaRegeneration from './assets/skills/mana-regeneration.png';
import iconMaximumHealth from './assets/skills/maximum-health.png';
import iconMaximumMana from './assets/skills/maximum-mana.png';
import iconMeteorStorm from './assets/skills/meteor-storm.jpg';
import iconMovementSpeed from './assets/skills/movement-speed.png';
import iconMyrmidonsFury from './assets/skills/myrmidons-fury.jpg';
import iconOnslaught from './assets/skills/onslaught.jpg';
import iconPhysicalEvasionBonus from './assets/skills/physical-evasion-bonus.png';
import iconPrismaticBeam from './assets/skills/prismatic-beam.jpg';
import iconRadiantBurst from './assets/skills/radiant-burst.jpg';
import iconRegeneration from './assets/skills/regeneration.jpg';
import iconResoundingSmash from './assets/skills/resounding-smash.jpg';
import iconResurrection from './assets/skills/resurrection.jpg';
import iconShockwave from './assets/skills/shockwave.jpg';
import iconThundershock from './assets/skills/thundershock.jpg';
import iconUltimateDefense from './assets/skills/ultimate-defense.jpg';
import iconWeaponToss from './assets/skills/weapon-toss.jpg';

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
	bulwark: {
		kind: 'active',
		id: 'bulwark',
		name: 'Bulwark',
		icon: iconBulwark,
		cost: 1,
		ranks: [
			'Bash enemies in front of you twice. The second attack temporarily increases block chance. You must have a shield equipped to block.',
			'Additional increased block chance.',
			'The second attack knocks down enemies.',
		],
	},
	castigation: {
		kind: 'active',
		id: 'castigation',
		name: 'Castigation',
		icon: iconCastigation,
		cost: 1,
		ranks: [
			'Lashes your target with holy energy whip, dealing direct damage and restoring health and mana to yourself over time.',
			'Heals you instantly for an additional amount upon hit.',
			'Restores health and mana to nearby party members for the duration.',
		],
	},
	devotion: {
		kind: 'active',
		id: 'devotion',
		name: 'Devotion',
		icon: iconDevotion,
		cost: 1,
		ranks: [
			'Launch an orb of energy into the air that will fall upon your target, healing them.',
			'The energy orb will travel faster and heal for more.',
			'The target will be infused with a slow, long-lasting healing effect.',
		],
	},
	'divine-censure': {
		kind: 'active',
		id: 'divine-censure',
		name: 'Divine Censure',
		icon: iconDivineCensure,
		cost: 1,
		ranks: [
			'Hurls a radiant spear at the target, dealing damage.',
			'Further attacks upon the target have a chance to heal the attacker.',
			'The target has a chance to deal damage to itself when it attacks.',
		],
	},
	'divine-light': {
		kind: 'active',
		id: 'divine-light',
		name: 'Divine Light',
		icon: iconDivineLight,
		cost: 1,
		ranks: [
			'Heals your target with a flash of light. Reduces the cooldown of Devotion and Radiant Burst.',
			'Increased healing.',
			'Reduced mana cost.',
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
	'hallowed-ground': {
		kind: 'active',
		id: 'hallowed-ground',
		name: 'Hallowed Ground',
		icon: iconHallowedGround,
		cost: 1,
		ranks: [
			'Fills the surrounding area with radiant energy that damages enemies.',
			'The area provides a healing aura for allies.',
			'Allies within the area will receive boosted magical defense. Enemies within the area will deal less physical damage.',
		],
	},
	javelin: {
		kind: 'active',
		id: 'javelin',
		name: 'Javelin',
		icon: iconJavelin,
		cost: 1,
		ranks: [
			'Pulls a target enemy to your location.',
			'Deals damage and generates a great amount of threat.',
			'Reduces cooldown by 5 seconds.',
		],
	},
	judgment: {
		kind: 'active',
		id: 'judgment',
		name: 'Judgment',
		icon: iconJudgment,
		cost: 1,
		ranks: [
			'Holy power crushes your target, dealing direct damage.',
			'Slows the target temporarily.',
			'Temporarily reduces the target\'s defenses.',
		],
	},
	lacerate: {
		kind: 'active',
		id: 'lacerate',
		name: 'Lacerate',
		icon: iconLacerate,
		cost: 1,
		ranks: [
			'Pierce your enemy, dealing instant damage and causing them to bleed for additional damage over time.',
			'Increased bleed duration. If the target is bleeding from previous Lacerate, explode remaining bleed damage as instant damage.',
			'Hitting an enemy with Lacerate already under its bleed effect will consume the bleed and deal 50% of the remaining damage instantly.',
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
	'myrmidons-fury': {
		kind: 'active',
		id: 'myrmidons-fury',
		name: 'Myrmidon\'s Fury',
		icon: iconMyrmidonsFury,
		cost: 1,
		ranks: [
			'Strike your target and gain a temporary buff that gives you a chance to counterattack each time you are struck.',
			'Increased chance to counterattack.',
			'Increased damage mitigation during the buff\'s duration.',
		],
	},
	onslaught: {
		kind: 'active',
		id: 'onslaught',
		name: 'Onslaught',
		icon: iconOnslaught,
		cost: 1,
		ranks: [
			'Charge and deal damage to your target.',
			'Reduce the target\'s attack damage temporarily.',
			'Knock down the target.',
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
	'radiant-burst': {
		kind: 'active',
		id: 'radiant-burst',
		name: 'Radiant Burst',
		icon: iconRadiantBurst,
		cost: 1,
		ranks: [
			'Heals allies around you in a wide area for a large amount.',
			'Stacks up to 3 times.[7]	Heals for a greater amount.',
			'Cooldown removed.',
		],
	},
	regeneration: {
		kind: 'active',
		id: 'regeneration',
		name: 'Regeneration',
		icon: iconRegeneration,
		cost: 1,
		ranks: [
			'Bathe your target with restorative energy that heals them over time.',
			'Reduced mana cost.',
			'Applies a 5% healing received bonus to the target.',
		],
	},
	'resounding-smash': {
		kind: 'active',
		id: 'resounding-smash',
		name: 'Resounding Smash',
		icon: iconResoundingSmash,
		cost: 1,
		ranks: [
			'Strikes in front of you, then deal additional damage after a short delay to any targets that were initially struck.',
			'The delayed hit deals additional damage.',
			'The delayed hit returns mana to yourself.',
		],
	},
	resurrection: {
		kind: 'active',
		id: 'resurrection',
		name: 'Resurrection',
		icon: iconResurrection,
		cost: 1,
		ranks: [
			'Resurrects a dead ally with 25% health and 15% mana.',
			'Target resurrects with 50% health and 20% mana.',
			'Target resurrects with 75% health and 25% mana.',
		],
	},
	shockwave: {
		kind: 'active',
		id: 'shockwave',
		name: 'Shockwave',
		icon: iconShockwave,
		cost: 1,
		ranks: [
			'Strike the ground with your weapon, dealing damage to enemies in front of you and leaving a fiery patch of earth that continually deals damage to enemies in the area over its duration.',
			'The fiery patch left behind deals additional damage.',
			'Slows enemies standing in the area.',
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
	'ultimate-defense': {
		kind: 'active',
		id: 'ultimate-defense',
		name: 'Ultimate Defense',
		icon: iconUltimateDefense,
		cost: 1,
		ranks: [
			'Become immune to damage for 3 seconds.',
			'Duration is increased to 5 seconds.',
			'Grant damage mitigation to all party members.',
		],
	},
	'weapon-toss': {
		kind: 'active',
		id: 'weapon-toss',
		name: 'Weapon Toss',
		icon: iconWeaponToss,
		cost: 1,
		ranks: [
			'Throw your weapon at a target.',
			'Bounces to two additional enemies.',
			'Explodes upon hitting the final target, dealing damage to enemies in the area.',
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
	'block-chance': {
		kind: 'passive',
		id: 'block-chance',
		name: 'Block Chance',
		icon: iconBlockChance,
		cost: 2,
		ranks: ['Increase chance to block attacks by 20% (Blocked attacks deal 20% reduced damage).'],
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
	'disable-defense': {
		kind: 'passive',
		id: 'disable-defense',
		name: 'Disable Defense',
		icon: iconDisableDefense,
		cost: 2,
		ranks: ['Reduce chance of being disabled by crowd control effects by 10%.'],
	},
	'healing-received': {
		kind: 'passive',
		id: 'healing-received',
		name: 'Healing Received',
		icon: iconHealingReceived,
		cost: 2,
		ranks: ['Increase the amount of healing received by 10%.'],
	},
	'health-regeneration': {
		kind: 'passive',
		id: 'health-regeneration',
		name: 'Health Regeneration',
		icon: iconHealthRegeneration,
		cost: 2,
		ranks: ['Generate an additional 15% of your maximum health per second.'],
	},
	'increased-healing': {
		kind: 'passive',
		id: 'increased-healing',
		name: 'Increased Healing',
		icon: iconIncreasedHealing,
		cost: 2,
		ranks: ['Increase healing done by 10%.'],
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
	'maximum-mana': {
		kind: 'passive',
		id: 'maximum-mana',
		name: 'Maximum Mana',
		icon: iconMaximumMana,
		cost: 2,
		ranks: ['Increase maximum mana by 100.'],
	},
	'movement-speed': {
		kind: 'passive',
		id: 'movement-speed',
		name: 'Movement Speed',
		icon: iconMovementSpeed,
		cost: 2,
		ranks: ['Increase movement speed by 5%.'],
	},
	'physical-evasion-bonus': {
		kind: 'passive',
		id: 'physical-evasion-bonus',
		name: 'Physical Evasion Bonus',
		icon: iconPhysicalEvasionBonus,
		cost: 2,
		ranks: ['Increase physical evasion bonus by 5.'],
	},
};
