import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

import { Content } from '~/core/ui';
import { fetchSkillTrees } from '~/skilltrees/data';
import { ArchetypeCard } from '~/skilltrees/picker';

import css from './SkillTreePicker.module.css';

export function SkillTreePicker() {
	const { data, isLoading } = useQuery({
		queryFn: () => fetchSkillTrees(),
		queryKey: ['skilltrees'],
	});

	if (isLoading || !data) return null;

	return (
		<>
			<Helmet>
				<title>Skill Trees</title>
			</Helmet>
			<Content className={css.cards}>
				{data.archetypes.map((archetype) => (
					<ArchetypeCard
						key={archetype.name}
						archetype={archetype}
						href={`/archetype/${archetype.name.toLowerCase()}`}
					/>
				))}
			</Content>
		</>
	);
}
