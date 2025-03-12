import { DATA_URL } from './constants';

export function assetUrl(assetPath: string) {
	return `${DATA_URL}/assets${assetPath}`;
}
