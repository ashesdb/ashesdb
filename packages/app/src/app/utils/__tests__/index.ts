import * as index from '..';

jest.mock('../createBuildString', () => () => {});
jest.mock('../parseBuildString', () => () => {});

describe('index', () => {
	it('should export all util functions', () => {
		expect(typeof index.createBuildString).toBe('function');
		expect(typeof index.parseBuildString).toBe('function');
	});
});
