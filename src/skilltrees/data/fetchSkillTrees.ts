import { fetchData } from '~/core/data';

type SkillTrees = {
	archetypes: {
		displayName: string;
		name: string;
		backdrop: string;
		icon: string;
	}[];
};

export async function fetchSkillTrees() {
	const res = await fetchData('/skilltrees.json');
	if (!res.ok) {
		throw new Error(`Request failed: ${res.status}`);
	}

	const data: SkillTrees = await res.json();
	return data;
}
