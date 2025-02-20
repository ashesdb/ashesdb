import { useQuery } from '@tanstack/react-query';
import { useParams } from 'wouter';

import { fetchSkillTreeByName } from '~/skilltrees/api';
import { SkillTree } from '~/skilltrees/skilltree';

export function SkillsPlanner() {
	const { archetype } = useParams<{ archetype: string }>();
	const { data, isLoading } = useQuery({
		queryFn: () => fetchSkillTreeByName(archetype),
		queryKey: ['skilltrees', archetype],
	});

	if (isLoading || !data) return null;

	return <SkillTree data={data} />;
}
