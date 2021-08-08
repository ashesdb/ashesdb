import { skillTierThresholds } from '../data';

export default function getUnlockedTiers(pointsPerTierCumulative: number[]): boolean[] {
	return skillTierThresholds.reduce((acc, threshold, tier) => [
		...acc,
		(acc[tier - 1]) === false ? false : (
			(pointsPerTierCumulative[tier - 1] || 0) >= threshold
		)
	], [] as boolean[]);
}
