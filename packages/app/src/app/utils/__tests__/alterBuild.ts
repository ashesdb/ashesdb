import { archetypesById } from '../../data/archetypes';
import { getOrderedSkills } from '../../data/utils';
import alterBuild from '../alterBuild';

jest.mock('../../data', () => ({
	__esModule: true,
	skillTierThresholds: [0, 4, 10, 18],
}));

jest.mock('../../data/archetypes', () => ({
	__esModule: true,
	archetypesById: {
		mage: { id: 'mage' },
		tank: { id: 'tank' },
	},
}));

jest.mock('../../data/skills', () => ({
	__esModule: true,
	skillsById: {
		'ability-1': { id: 'ability-1', name: 'Ability 1', cost: 2, ranks: ['1'] },
		'ability-2': { id: 'ability-2', name: 'Ability 2', cost: 2, ranks: ['1'] },
		'ability-3': { id: 'ability-3', name: 'Ability 3', cost: 2, ranks: ['1'] },
		'ability-4': { id: 'ability-4', name: 'Ability 4', cost: 2, ranks: ['1'] },
		'ability-5': { id: 'ability-5', name: 'Ability 5', cost: 2, ranks: ['1'] },
		'ability-6': { id: 'ability-6', name: 'Ability 6', cost: 2, ranks: ['1'] },
		'ability-7': { id: 'ability-7', name: 'Ability 7', cost: 2, ranks: ['1'] },
		'ability-8': { id: 'ability-8', name: 'Ability 8', cost: 2, ranks: ['1'] },
		'ability-9': { id: 'ability-9', name: 'Ability 9', cost: 2, ranks: ['1'] },
		'ability-10': { id: 'ability-10', name: 'Ability 10', cost: 1, ranks: ['1', '2', '3'] },
		'ability-11': { id: 'ability-11', name: 'Ability 11', cost: 1, ranks: ['1', '2', '3'] },
		'ability-12': { id: 'ability-12', name: 'Ability 12', cost: 1, ranks: ['1', '2', '3'] },
		'ability-13': { id: 'ability-13', name: 'Ability 13', cost: 1, ranks: ['1', '2', '3'] },
		'ability-14': { id: 'ability-14', name: 'Ability 14', cost: 1, ranks: ['1', '2', '3'] },
		'ability-15': { id: 'ability-15', name: 'Ability 15', cost: 1, ranks: ['1', '2', '3'] },
		'ability-16': { id: 'ability-16', name: 'Ability 16', cost: 1, ranks: ['1', '2', '3'] },
		'ability-17': { id: 'ability-17', name: 'Ability 17', cost: 1, ranks: ['1', '2', '3'] },
		'ability-18': { id: 'ability-18', name: 'Ability 18', cost: 1, ranks: ['1', '2', '3'] },
		'non-mage-ability': { id: 'non-mage-ability', name: 'Non-Mage ability', cost: 1, ranks: ['1', '2', '3'] },
	},
}));

const skillTreesLayout = [
	{
		id: 'passive',
		skills: [
			['ability-1', 'ability-2'],
			['ability-3', 'ability-4'],
			['ability-5', 'ability-6', 'ability-7'],
			['ability-8', 'ability-9'],
		],
	},
	{
		id: 'active',
		skills: [
			['ability-10', 'ability-11'],
			['ability-12', 'ability-13', 'ability-14'],
			['ability-15', 'ability-16'],
			['ability-17', 'ability-18'],
		],
	},
];

const orderedSkills = getOrderedSkills(skillTreesLayout);

describe('alterBuild', () => {
	beforeEach(() => {
		archetypesById.mage.orderedSkills = orderedSkills;
		archetypesById.mage.skillTreesLayout = skillTreesLayout;
	});

	afterEach(() => {
		delete archetypesById.mage.orderedSkills;
		delete archetypesById.mage.skillTreesLayout;
	});

	it('should throw an error if an invalid skill is given', () => {
		const build = { archetypeId: 'mage', pointsPerSkill: {} };
		const shouldThrow = () => {
			alterBuild(build, 'ability-19', 1);
		};

		expect(shouldThrow).toThrow(new Error('Skill "ability-19" is not valid.'));
	});

	it('should throw an error if an invalid archetype id is specified', () => {
		const build = { archetypeId: 'shaman', pointsPerSkill: {} };
		const shouldThrow = () => {
			alterBuild(build, 'ability-1', 1);
		};

		expect(shouldThrow).toThrow(new Error('Invalid archetype "shaman" specified.'));
	});

	it('should throw an error if the archetype does not have a skill tree', () => {
		const build = { archetypeId: 'tank', pointsPerSkill: { 'non-mage-ability': 1 } };
		const shouldThrow = () => {
			alterBuild(build, 'non-mage-ability', 1);
		};

		expect(shouldThrow).toThrow(new Error('Archetype "tank" is currently not supported.'));
	});

	it('should throw an error if the archetype does not have the given skill', () => {
		const build = { archetypeId: 'mage', pointsPerSkill: {} };
		const shouldThrow = () => {
			alterBuild(build, 'non-mage-ability', 1);
		};

		expect(shouldThrow).toThrow(new Error('Archetype "mage" does not have skill "Non-Mage ability".'));
	});

	it('should throw an error if the given skill is already at 0 points when trying to decrease it', () => {
		const build = { archetypeId: 'mage', pointsPerSkill: { 'ability-1': 0 } };
		const shouldThrow = () => {
			alterBuild(build, 'ability-1', -1);
		};

		expect(shouldThrow).toThrow(new Error('Skill "Ability 1" is already at 0 points.'));
	});

	it('should throw an error if the given skill is already at its maximum rank when trying to increase it', () => {
		const build = { archetypeId: 'mage', pointsPerSkill: { 'ability-1': 1 } };
		const shouldThrow = () => {
			alterBuild(build, 'ability-1', 1);
		};

		expect(shouldThrow).toThrow(new Error('Skill "Ability 1" is already at its maximum rank.'));
	});

	const casesAddFail: {
		skillId: string;
		skillName: string;
		pointsPerSkill: { [k: string]: number },
	}[] = [
		{ skillId: 'ability-12', skillName: 'Ability 12', pointsPerSkill: { 'ability-10': 1 } },
		{ skillId: 'ability-15', skillName: 'Ability 15', pointsPerSkill: { 'ability-10': 1 } },
		{ skillId: 'ability-15', skillName: 'Ability 15', pointsPerSkill: { 'ability-1': 1, 'ability-10': 1, 'ability-11': 1 } },
	];

	casesAddFail.forEach(({ skillId, skillName, pointsPerSkill }) => {
		it('should throw an error when trying to add a point to a skill on a tier that has not yet been unlocked', () => {
			const build = { archetypeId: 'mage', pointsPerSkill };
			const shouldThrow = () => {
				alterBuild(build, skillId, 1)
			};
			expect(shouldThrow).toThrow(new Error(`Skill "${skillName}" is on a tier that is not unlocked yet.`));
		});
	});

	const casesRemoveFail: {
		skillId: string;
		skillName: string;
		pointsPerSkill: { [k: string]: number },
	}[] = [
		{
			skillId: 'ability-10',
			skillName: 'Ability 10',
			pointsPerSkill: {
				'ability-1': 1,  // 1
				'ability-10': 2, // 1
				'ability-12': 1, // 2
			},
		},
		{
			skillId: 'ability-12',
			skillName: 'Ability 12',
			pointsPerSkill: {
				'ability-1': 1,  // 1
				'ability-10': 1, // 1
				'ability-3': 1,  // 2
				'ability-12': 3, // 2
				'ability-13': 1, // 2
				'ability-15': 1, // 3
			},
		},
	];

	casesRemoveFail.forEach(({ skillId, skillName, pointsPerSkill }) => {
		it('should throw an error when trying to remove a point from a skill on a tier that would lock later tiers with points assigned', () => {
			const build = { archetypeId: 'mage', pointsPerSkill };
			const shouldThrow = () => {
				alterBuild(build, skillId, -1)
			};
			expect(shouldThrow).toThrow(new Error(`Removing a point from "${skillName}" is not possible since it would lock a tier with points allocated.`));
		});
	});

	const casesAdd: {
		skillId: string;
		pointsPerSkillStart: { [k: string]: number };
		pointsPerSkillEnd: { [k: string]: number };
	}[] = [
		{
			skillId: 'ability-10',
			pointsPerSkillStart: { 'ability-10': 0 },
			pointsPerSkillEnd: { 'ability-10': 1 },
		},
		{
			skillId: 'ability-1',
			pointsPerSkillStart: { 'ability-1': 0 },
			pointsPerSkillEnd: { 'ability-1': 1 },
		},
		{
			skillId: 'ability-12',
			pointsPerSkillStart: { 'ability-1': 1, 'ability-10': 2, 'ability-12': 0 },
			pointsPerSkillEnd: { 'ability-1': 1, 'ability-10': 2, 'ability-12': 1 },
		},
		{
			skillId: 'ability-15',
			pointsPerSkillStart: { 'ability-1': 1, 'ability-3': 1, 'ability-10': 2, 'ability-12': 3, 'ability-13': 1, 'ability-15': 0 },
			pointsPerSkillEnd: { 'ability-1': 1, 'ability-3': 1, 'ability-10': 2, 'ability-12': 3, 'ability-13': 1, 'ability-15': 1 },
		},
	];

	casesAdd.forEach(({ skillId, pointsPerSkillStart, pointsPerSkillEnd }) => {
		it(`should correctly add points to given skill in the build`, () => {
			const build = { archetypeId: 'mage', pointsPerSkill: pointsPerSkillStart };
			const alteredBuild = alterBuild(build, skillId, 1);
			expect(alteredBuild).toEqual({ archetypeId: 'mage', pointsPerSkill: pointsPerSkillEnd });
		});
	});

	const casesRemove: {
		skillId: string;
		pointsPerSkillStart: { [k: string]: number };
		pointsPerSkillEnd: { [k: string]: number };
	}[] = [
		{
			skillId: 'ability-10',
			pointsPerSkillStart: { 'ability-10': 1 },
			pointsPerSkillEnd: { 'ability-10': 0 },
		},
		{
			skillId: 'ability-1',
			pointsPerSkillStart: { 'ability-1': 1 },
			pointsPerSkillEnd: { 'ability-1': 0 },
		},
		{
			skillId: 'ability-10',
			pointsPerSkillStart: { 'ability-1': 1, 'ability-10': 3, 'ability-12': 1 },
			pointsPerSkillEnd: { 'ability-1': 1, 'ability-10': 2, 'ability-12': 1 },
		},
		{
			skillId: 'ability-15',
			pointsPerSkillStart: { 'ability-1': 1, 'ability-3': 1, 'ability-10': 2, 'ability-12': 3, 'ability-13': 1, 'ability-15': 1 },
			pointsPerSkillEnd: { 'ability-1': 1, 'ability-3': 1, 'ability-10': 2, 'ability-12': 3, 'ability-13': 1, 'ability-15': 0 },
		},
	];

	casesRemove.forEach(({ skillId, pointsPerSkillStart, pointsPerSkillEnd }) => {
		it(`should correctly remove points from given skill in the build`, () => {
			const build = { archetypeId: 'mage', pointsPerSkill: pointsPerSkillStart };
			const alteredBuild = alterBuild(build, skillId, -1);
			expect(alteredBuild).toEqual({ archetypeId: 'mage', pointsPerSkill: pointsPerSkillEnd });
		});
	});
});
