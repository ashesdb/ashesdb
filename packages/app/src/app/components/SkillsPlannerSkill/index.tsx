import React from 'react';

import useStyles from './useStyles';

interface Props {
	points: number;
	skill: ashesdb.Skill;
	onChange: (d: 1 | -1) => void;
}

export default function SkillsPlannerSkill({ points, skill, onChange }: Props) {
	const css = useStyles();

	function handleClickAdd() {
		onChange(1);
	}

	function handleClickRemove() {
		onChange(-1);
	}

	return (
		<div className={css.container} style={{ backgroundImage: `url(${skill.icon})` }}>
			<span className={css.points}>{points}</span>
			<div className={css.actions}>
				<button
					type="button"
					className={css.remove}
					disabled={points <= 0}
					onClick={handleClickRemove}
				>
					-
				</button>
				<button
					type="button"
					className={css.add}
					disabled={points >= skill.ranks.length}
					onClick={handleClickAdd}
				>
					+
				</button>
			</div>
		</div>
	);
}
