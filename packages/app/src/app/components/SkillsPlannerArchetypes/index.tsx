import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { archetypes } from '../../data/archetypes';

import useStyles from './useStyles';

export default function SkillsPlannerArchetypes() {
	const css = useStyles();

	return (
		<div className={css.container}>
			{['martial', 'arcane'].map(school => (
				<div key={school}>
					{archetypes.filter(archetype => archetype.school === school).map(archetype => (
						!archetype.skillTreesLayout
							? <span key={archetype.id} className={cn(css.tile)}>{archetype.name}</span>
							: <Link key={archetype.id} className={cn(css.tile, css.archetype)} to={archetype.id}>{archetype.name}</Link>
					))}
				</div>
			))}
		</div>
	);
}
