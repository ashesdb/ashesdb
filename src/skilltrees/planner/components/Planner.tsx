import { useMemo } from 'react';

import { assetUrl } from '~/core/data';
import type { SkillTree } from '~/skilltrees/data';

import { usePlanner } from '../hooks/usePlanner';
import { Connector } from './Connector';
import { Node } from './Node';
import css from './Planner.module.css';

type Props = {
	skillTree: SkillTree;
};

export function Planner({ skillTree: data }: Props) {
	const { autoGranted, connectors, nodes } = usePlanner(data);

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

	const occupiedCoords = useMemo(
		() =>
			Object.values(data.coords).reduce<Record<string, boolean>>(
				(acc, coord) => ({ ...acc, [`${coord.x}.${coord.y}`]: true }),
				{},
			),
		[data.coords],
	);

	const treeStyle = useMemo(
		() => ({
			width: (maxCoords.x + 1) * 60,
			height: (maxCoords.y + 1) * 60,
		}),
		[maxCoords],
	);

	return (
		<div className={css.planner} style={plannerStyle}>
			<div className={css.treeContainer}>
				<div className={css.tree} style={treeStyle}>
					<svg
						className={css.connectors}
						viewBox={`0 0 ${treeStyle.width} ${treeStyle.height}`}
					>
						{connectors.map((connector, i) => (
							<Connector
								key={i}
								connector={connector}
								maxCoords={maxCoords}
								occupiedCoords={occupiedCoords}
							/>
						))}
					</svg>
					{Object.values(nodes).map((node) => (
						<Node key={node.id} maxCoords={maxCoords} node={node} />
					))}
				</div>
			</div>
			<div className={css.autoGranted}>
				{autoGranted.map((node) => (
					<Node key={node.id} node={node} />
				))}
			</div>
		</div>
	);
}
