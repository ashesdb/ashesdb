import getUnlockedTiers from '../getUnlockedTiers';

describe('getUnlockedTiers', () => {
	[
		{ expected: [true, false, false, false], input: [0, 0, 0, 0] },
		{ expected: [true, false, false, false], input: [1, 1, 1, 1] },
		{ expected: [true, false, false, false], input: [2, 2, 2, 2] },
		{ expected: [true, true, false, false], input: [3, 3, 3, 3] },
		{ expected: [true, true, false, false], input: [3, 4, 4, 4] },
		{ expected: [true, true, false, false], input: [3, 5, 5, 5] },
		{ expected: [true, true, false, false], input: [3, 6, 6, 6] },
		{ expected: [true, true, false, false], input: [3, 7, 7, 7] },
		{ expected: [true, true, false, false], input: [3, 8, 8, 8] },
		{ expected: [true, true, false, false], input: [3, 9, 9, 9] },
		{ expected: [true, true, true, false], input: [3, 10, 10, 10] },
		{ expected: [true, true, true, false], input: [3, 10, 11, 11] },
		{ expected: [true, true, true, false], input: [3, 10, 12, 12] },
		{ expected: [true, true, true, false], input: [3, 10, 13, 13] },
		{ expected: [true, true, true, false], input: [3, 10, 14, 14] },
		{ expected: [true, true, true, false], input: [3, 10, 15, 15] },
		{ expected: [true, true, true, false], input: [3, 10, 16, 16] },
		{ expected: [true, true, true, false], input: [3, 10, 17, 17] },
		{ expected: [true, true, true, true], input: [3, 10, 18, 18] },
	].forEach(({ expected, input }) => {
		it('should return an array of booleans indicating which tiers are unlocked', () => {
			expect(getUnlockedTiers(input)).toEqual(expected);
		});
	})
});
