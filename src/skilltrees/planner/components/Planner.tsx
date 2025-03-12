import { useMemo } from 'react';

import { assetUrl } from '~/core/data';
import type { SkillTree } from '~/skilltrees/data';

import { Node } from './Node';
import css from './Planner.module.css';

type Props = {
	skillTree: SkillTree;
};

export function Planner({ skillTree: data }: Props) {
	const plannerStyle = useMemo(
		() => ({
			backgroundImage: `url(${assetUrl(data.backdrop)})`,
		}),
		[data.backdrop],
	);

	const maxCoords = useMemo(() => {
		const coords = Object.values(data.coords);
		return {
			x: Math.max(...coords.map((coord) => coord.x)),
			y: Math.max(...coords.map((coord) => coord.y)),
		};
	}, [data.coords]);

	const treeStyle = useMemo(
		() => ({
			width: (maxCoords.x + 1) * 60,
			height: (maxCoords.y + 1) * 60,
		}),
		[maxCoords],
	);

	const autoGranted = useMemo(
		() => data.autoGranted.reverse(),
		[data.autoGranted],
	);

	return (
		<div className={css.planner} style={plannerStyle}>
			<div className={css.treeContainer}>
				<div className={css.tree} style={treeStyle}>
					{Object.entries(data.coords).map(([id, coords]) => (
						<Node key={id} coords={coords} maxCoords={maxCoords} />
					))}
				</div>
			</div>
			<div className={css.autoGranted}>
				{autoGranted.map((id) => (
					<Node key={id} />
				))}
			</div>
		</div>
	);
}
