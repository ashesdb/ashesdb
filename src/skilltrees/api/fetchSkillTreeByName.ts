import { API_URL } from '~/core/api';

import type { FullSkillTree } from '~/skilltrees/types';

export async function fetchSkillTreeByName(name: string) {
	const res = await fetch(`${API_URL}/skilltrees/${name}`);
	if (!res.ok) {
		throw new Error(`Request failed: ${res.status}`);
	}

	const data: FullSkillTree = await res.json();
	return data;
}
