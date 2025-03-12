import { DATA_URL } from './constants';

export function fetchData(endpoint: string) {
	return fetch(`${DATA_URL}${endpoint}`);
}
