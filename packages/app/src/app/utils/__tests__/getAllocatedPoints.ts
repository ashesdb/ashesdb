import { archetypesById } from '../../data/archetypes';
import { getOrderedSkills } from '../../data/utils';
import getAllocatedPoints from '../getAllocatedPoints';

jest.mock('../../data/archetypes', () => ({
	__esModule: true,
	archetypesById: {
		mage: { id: 'mage' },
	},
}));

jest.mock('../../data/skills', () => ({
	__esModule: true,
	skillsById: {
		'ability-1': { cost: 2 },
		'ability-2': { cost: 2 },
		'ability-3': { cost: 2 },
		'ability-4': { cost: 2 },
		'ability-5': { cost: 2 },
		'ability-6': { cost: 2 },
		'ability-7': { cost: 2 },
		'ability-8': { cost: 2 },
		'ability-9': { cost: 2 },
		'ability-10': { cost: 1 },
		'ability-11': { cost: 1 },
		'ability-12': { cost: 1 },
		'ability-13': { cost: 1 },
		'ability-14': { cost: 1 },
		'ability-15': { cost: 1 },
		'ability-16': { cost: 1 },
		'ability-17': { cost: 1 },
		'ability-18': { cost: 1 },
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

describe('getAllocatedPoints', () => {
	it('should return an empty points object if the archetype does not exist', () => {
		const build = { archetypeId: 'shaman', pointsPerSkill: {} };
		const points = getAllocatedPoints(build);
		expect(points).toEqual({ perTier: [], perTierCumulative: [], perTree: [], total: 0 });
	});

	it('should return an empty points object if the archetype does not have skill tree', () => {
		const build = { archetypeId: 'mage', pointsPerSkill: {} };
		const points = getAllocatedPoints(build);
		expect(points).toEqual({ perTier: [], perTierCumulative: [], perTree: [], total: 0 });
	});

	const cases: {
		pointsPerSkill: { [k: string]: number };
		perTier: number[];
		perTierCumulative: number[];
		perTree: number[];
		total: number;
	}[] = [
		{
			pointsPerSkill: {
				'ability-1': 1,
				'ability-10': 3,
			},
			perTier: [5, 0, 0, 0],
			perTierCumulative: [5, 5, 5, 5],
			perTree: [2, 3],
			total: 5,
		},
		{
			pointsPerSkill: {
				'ability-2': 1,
				'ability-3': 1,
				'ability-10': 3,
				'ability-11': 1,
				'ability-12': 1,
				'ability-13': 3,
			},
			perTier: [6, 6, 0, 0],
			perTierCumulative: [6, 12, 12, 12],
			perTree: [4, 8],
			total: 12,
		},
		{
			pointsPerSkill: {
				'ability-2': 1,
				'ability-3': 1,
				'ability-6': 1,
				'ability-7': 1,
				'ability-9': 1,
				'ability-10': 3,
				'ability-11': 1,
				'ability-12': 1,
				'ability-13': 3,
			},
			perTier: [6, 6, 4, 2],
			perTierCumulative: [6, 12, 16, 18],
			perTree: [10, 8],
			total: 18,
		},
	];

	cases.forEach(({ pointsPerSkill, perTier, perTierCumulative, perTree, total }) => {
		it('should return an object with allocated points per tier, tree and total', () => {
			archetypesById.mage.orderedSkills = getOrderedSkills(skillTreesLayout);
			archetypesById.mage.skillTreesLayout = skillTreesLayout;

			const build = { archetypeId: 'mage', pointsPerSkill };
			expect(getAllocatedPoints(build)).toEqual({ perTier, perTierCumulative, perTree, total });
			delete archetypesById.mage.orderedSkills;
			delete archetypesById.mage.skillTreesLayout;
		});
	});
});
