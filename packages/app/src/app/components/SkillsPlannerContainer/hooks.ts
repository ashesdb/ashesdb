import { useMemo } from 'react';

import { parseBuildString } from '../../utils';

interface State {
	build?: ashesdb.Build;
	error?: Error;
}

export function useBuild(buildString: string): State {
	return useMemo(() => {
		try {
			if (!buildString) return {};
			const build = parseBuildString(buildString);
			return { build };
		} catch (error) {
			return { error };
		}
	}, [buildString]);
}
