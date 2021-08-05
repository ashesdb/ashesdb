import React from 'react';
import { useParams } from 'react-router-dom';

import SkillsPlannerArchetypes from '../SkillsPlannerArchetypes';

import { useBuild } from './hooks';
import useStyles from './useStyles';

export default function SkillsPlannerContainer() {
	const css = useStyles();
	const { '*': buildString } = useParams();
	const { build, error } = useBuild(buildString);

	if (!build) {
		return (
			<div className={css.container}>
				{!!error && (
					<p className={css.error}>{error.message}</p>
				)}
				<SkillsPlannerArchetypes />
			</div>
		);
	}

	return (
		<p>
			Skills planner for {build.archetypeId} - coming soon.
		</p>
	);
}
