import { archetypesById } from '../../data/archetypes';
import createBuildString from '../createBuildString';

jest.mock('../../data/archetypes', () => ({
	__esModule: true,
	archetypesById: {
		mage: { id: 'mage', orderedSkills: ['ability-1'] },
		tank: { id: 'tank' },
	},
}));

describe('createBuildString', () =>{
	it('should return an empty string if the build has no archetype or an invalid one', () => {
		const build = { archetypeId: '', pointsPerSkill: {} };
		expect(createBuildString(build)).toBe('');
	});

	it('should return an empty string if the archetype has no skills', () => {
		const build = { archetypeId: 'tank', pointsPerSkill: {} };
		expect(createBuildString(build)).toBe('');
	});

	it('should return just the archetype if no points have been assigned', () => {
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
		expect(createBuildString(build)).toBe('mage');
	});

	[
		{
			orderedSkills: ['ability-1', 'ability-2', 'ability-3', 'ability-4', 'ability-5'],
			result: 'mage/0:00300',
		},
		{
			orderedSkills: ['ability-2', 'ability-3', 'ability-4', 'ability-5', 'ability-1'],
			result: 'mage/0:03000',
		},
		{
			orderedSkills: ['ability-3', 'ability-4', 'ability-5', 'ability-1', 'ability-2'],
			result: 'mage/0:30000',
		},
		{
			orderedSkills: ['ability-4', 'ability-5', 'ability-1', 'ability-2', 'ability-3'],
			result: 'mage/0:00003',
		},
		{
			orderedSkills: ['ability-5', 'ability-1', 'ability-2', 'ability-3', 'ability-4'],
			result: 'mage/0:00030',
		},
	].forEach(({ orderedSkills, result }) => {
		it('should return the full build string with points in skill order', () => {
			archetypesById.mage.orderedSkills = orderedSkills;

			const build = {
				archetypeId: 'mage',
				pointsPerSkill: {
					'ability-1': 0,
					'ability-2': 0,
					'ability-3': 3,
					'ability-4': 0,
					'ability-5': 0,
				},
			};
			expect(createBuildString(build)).toBe(result);
			delete archetypesById.mage.orderedSkills;
		});
	})
});
