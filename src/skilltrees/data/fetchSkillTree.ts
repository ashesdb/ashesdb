import { fetchData } from '~/core/data';

type Coords = {
	x: number;
	y: number;
};

export type SkillTree = {
	backdrop: string;
	displayName: string;
	name: string;
	autoGranted: string[];
	coords: Record<string, Coords>;
};

export async function fetchSkillTree(archetype: string) {
	const res = await fetchData(`/skilltrees/archetypes/${archetype}.json`);
	if (!res.ok) {
		throw new Error(`Request failed: ${res.status}`);
	}

	const data: SkillTree = await res.json();
	return data;
}
