import React, { useMemo } from 'react';

import { skillTierThresholds } from '../../data';
import { archetypesById } from '../../data/archetypes';
import { skillsById, skillTreesById } from '../../data/skills';
import { getAllocatedPoints } from '../../utils';
import SkillsPlannerSkill from '../SkillsPlannerSkill';
import SkillsPlannerTier from '../SkillsPlannerTier';
import SkillsPlannerTree from '../SkillsPlannerTree';

import { useUnlockedTiers } from './hooks';
import useStyles from './useStyles';

interface Props {
	build: ashesdb.Build;
	onChange: (skillId: string, delta: 1 | -1) => void;
}

export default function SkillsPlanner({ build, onChange }: Props) {
	const css = useStyles();
	const allocatedPoints = useMemo(() => getAllocatedPoints(build), [build]);
	const unlockedTiers = useUnlockedTiers(allocatedPoints.perTierCumulative);

	const archetype = archetypesById[build.archetypeId];
	if (!archetype.skillTreesLayout) {
		return <div>Supported archetype is not supported yet.</div>;
	}

	function createHandleChange(skillId: string) {
		return (delta: 1 | -1) => {
			onChange(skillId, delta);
		};
	}

	return (
		<div className={css.container}>
			{archetype.skillTreesLayout.map((tree, treeIndex) => (
				<SkillsPlannerTree
					key={tree.id}
					points={allocatedPoints.perTree[treeIndex]}
					tree={skillTreesById[tree.id]}
				>
					{tree.skills.map((tier, tierIndex) => (
						<SkillsPlannerTier
							key={tierIndex}
							threshold={skillTierThresholds[tierIndex]}
							unlocked={unlockedTiers[tierIndex]}
						>
							{tier.map(skillId => (
								<SkillsPlannerSkill
									key={skillId}
									points={build.pointsPerSkill[skillId] || 0}
									skill={skillsById[skillId]}
									onChange={createHandleChange(skillId)}
								/>
							))}
						</SkillsPlannerTier>
					))}
				</SkillsPlannerTree>
			))}
		</div>
	);
}
