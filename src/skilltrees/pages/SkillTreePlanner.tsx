import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'wouter';

import { Content } from '~/core/ui';
import { fetchSkillTree } from '~/skilltrees/data';
import { Planner } from '~/skilltrees/planner';

export function SkillTreePlanner() {
	const { archetypeName } = useParams<{ archetypeName: string }>();

	const { data, isLoading } = useQuery({
		queryFn: () => fetchSkillTree(archetypeName),
		queryKey: ['skilltrees', 'archetypes', archetypeName],
	});

	if (isLoading || !data) return null;

	return (
		<>
			<Helmet>
				<title>{data.displayName} Skill Tree</title>
			</Helmet>
			<Content>
				<Planner skillTree={data} />
			</Content>
		</>
	);
}
