import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { alterBuild, createBuildString } from '../../utils';
import SkillsPlanner from '../SkillsPlanner';
import SkillsPlannerArchetypes from '../SkillsPlannerArchetypes';

import { useBuild } from './hooks';
import useStyles from './useStyles';

export default function SkillsPlannerContainer() {
	const css = useStyles();
	const navigate = useNavigate();
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

	function handleChange(skillId: string, delta: 1 | -1) {
		try {
			const alteredBuild = alterBuild(build!, skillId, delta);
			const alteredBuildString = createBuildString(alteredBuild);
			navigate(alteredBuildString);
		} catch (err) {
			console.error('Failed to alter build', err);
		}
	}

	return (
		<SkillsPlanner build={build} onChange={handleChange} />
	);
}
