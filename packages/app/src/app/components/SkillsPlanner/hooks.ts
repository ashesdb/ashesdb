import { useMemo } from 'react';

import { getUnlockedTiers } from '../../utils';

export function useUnlockedTiers(pointsPerTierCumulative: number[]): boolean[] {
	return useMemo(() => (
		getUnlockedTiers(pointsPerTierCumulative)
	), [pointsPerTierCumulative]);
}
