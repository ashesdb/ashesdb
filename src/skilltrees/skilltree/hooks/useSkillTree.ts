import { useMemo } from 'react';
import type { MouseEvent } from 'react';

import type { FullTree } from '~/skilltrees/types';

function resolveIcon(nodeId: string, data: FullTree) {
	const node = data.nodes[nodeId];
	if (!node || !('skillId' in node)) return;

	const skill = data.skills[node.skillId];
	if (!skill) {
		console.log('SKILL NOT FOUND', node.skillId);
		return;
	}

	const skillRank = data.skillRanks[skill.skillRankIds[0]];
	if (!skillRank) {
		console.log('SKILL RANK NOT FOUND', skill.skillRankIds[0]);
		return;
	}

	if ('abilityId' in skillRank) {
		const icon = data.abilities[skillRank.abilityId].icon;
		return `url(http://localhost:8700/img${icon})`;
	}

	if ('effectId' in skillRank) {
		const icon = data.effects[skillRank.effectId].icon;
		return `url(http://localhost:8700/img${icon})`;
	}

	return undefined;
}

export function useSkillTree(data: FullTree) {
	const { tree } = data;

	const dimensions = useMemo(() => {
		const xs = tree.nodes.map((node) => node.x);
		const ys = tree.nodes.map((node) => node.y);
		return {
			maxX: Math.max(...xs),
			maxY: Math.max(...ys),
			minX: Math.min(...xs),
			minY: Math.min(...ys),
		};
	}, [tree]);

	const augmentedNodes = useMemo(
		() =>
			tree.nodes.map((node) => ({
				...node,
				props: {
					style: {
						top: (dimensions.maxY - node.y) * 100 + 20,
						left: node.x * 100 + 20,
						backgroundImage: resolveIcon(node.nodeId, data),
					},
					onClick: (e: MouseEvent) => {
						e.preventDefault();
						console.log('NODE CLICK!', node.nodeId);
					},

					onContextMenu: (e: MouseEvent) => {
						e.preventDefault();
						console.log('RIGHT CLICK!', node.nodeId);
					},
				},
			})),
		[data, dimensions, tree],
	);

	const containerProps = useMemo(
		() => ({
			style: {
				width: (dimensions.maxX + 1) * 100,
				height: (dimensions.maxY + 1) * 100,
			},
		}),
		[dimensions],
	);

	return useMemo(
		() => ({ containerProps, nodes: augmentedNodes }),
		[augmentedNodes, containerProps],
	);
}
