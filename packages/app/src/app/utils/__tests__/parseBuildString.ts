import { archetypesById } from '../../data/archetypes';
import parseBuildString from '../parseBuildString';

jest.mock('../../data/archetypes', () => ({
	__esModule: true,
	archetypesById: {
		mage: {
			id: 'mage',
			orderedSkills: [
				'ability-1',
				'ability-2',
				'ability-3',
				'ability-4',
				'ability-5',
			],
		},
		tank: { id: 'tank' },
	},
}));

describe('parseBuildString', () => {
	it('should return an empty build if the build string is empty', () => {
		const build = parseBuildString('');
		expect(build).toEqual({ archetypeId: '', pointsPerSkill: {} });
	});

	it('should throw an error if the build string is invalid', () => {
		const shouldThrow = () => {
			parseBuildString('123kjasd');
		};
		expect(shouldThrow).toThrow(new Error('Given build string is not valid.'));
	});

	it('should throw an error if the specified archetype is invalid', () => {
		const shouldThrow = () => {
			parseBuildString('shaman');
		};
		expect(shouldThrow).toThrow(new Error('Invalid archetype "shaman" specified.'));
	});

	it('should throw an error if the specified archetype is not supported', () => {
		const shouldThrow = () => {
			parseBuildString('tank');
		};
		expect(shouldThrow).toThrow(new Error('Archetype "tank" is currently not supported.'));
	});

	it('should return a build with 0 points assigned for build strings without points', () => {
		const build = {
			archetypeId: 'mage',
			pointsPerSkill: {
				'ability-1': 0,
				'ability-2': 0,
				'ability-3': 0,
				'ability-4': 0,
				'ability-5': 0,
			},
		};
		expect(parseBuildString('mage')).toEqual(build);
	});

	[
		{
			orderedSkills: ['ability-1', 'ability-2', 'ability-3', 'ability-4', 'ability-5'],
			pointsPerSkill: {
				'ability-1': 0,
				'ability-2': 0,
				'ability-3': 3,
				'ability-4': 0,
				'ability-5': 0,
			},
		},
		{
			orderedSkills: ['ability-2', 'ability-3', 'ability-4', 'ability-5', 'ability-1'],
			pointsPerSkill: {
				'ability-1': 0,
				'ability-2': 0,
				'ability-3': 0,
				'ability-4': 3,
				'ability-5': 0,
			},
		},
		{
			orderedSkills: ['ability-3', 'ability-4', 'ability-5', 'ability-1', 'ability-2'],
			pointsPerSkill: {
				'ability-1': 0,
				'ability-2': 0,
				'ability-3': 0,
				'ability-4': 0,
				'ability-5': 3,
			},
		},
		{
			orderedSkills: ['ability-4', 'ability-5', 'ability-1', 'ability-2', 'ability-3'],
			pointsPerSkill: {
				'ability-1': 3,
				'ability-2': 0,
				'ability-3': 0,
				'ability-4': 0,
				'ability-5': 0,
			},
		},
		{
			orderedSkills: ['ability-5', 'ability-1', 'ability-2', 'ability-3', 'ability-4'],
			pointsPerSkill: {
				'ability-1': 0,
				'ability-2': 3,
				'ability-3': 0,
				'ability-4': 0,
				'ability-5': 0,
			},
		}
	].forEach(({ orderedSkills, pointsPerSkill }) => {
		it('should return a build with correctly assigned points', () => {
			archetypesById.mage.orderedSkills = orderedSkills;
			const build = {
				pointsPerSkill,
				archetypeId: 'mage',
			};
			expect(parseBuildString('mage/0:00300')).toEqual(build);
			delete archetypesById.mage.orderedSkills;
		});
	});
});
