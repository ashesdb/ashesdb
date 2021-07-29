import * as index from '..';

jest.mock('../alterBuild', () => () => {});
jest.mock('../createBuildString', () => () => {});
jest.mock('../getAllocatedPoints', () => () => {});
jest.mock('../parseBuildString', () => () => {});

describe('index', () => {
	it('should export all util functions', () => {
		expect(typeof index.alterBuild).toBe('function');
		expect(typeof index.createBuildString).toBe('function');
		expect(typeof index.getAllocatedPoints).toBe('function');
		expect(typeof index.parseBuildString).toBe('function');
	});
});
