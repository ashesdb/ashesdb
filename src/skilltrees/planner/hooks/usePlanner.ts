import { useMemo } from 'react';

import { sum } from '~/core/helpers';
import type { SkillTree } from '~/skilltrees/data';

import type { Connector, Node, OnClickNode } from '../types';
import { useAugmentedNodes } from './useAugmentedNodes';
import { useSelectedNodes } from './useSelectedNodes';

export function usePlanner(data: SkillTree) {
	const augmentedNodes = useAugmentedNodes(data);

	const autoGranted = useMemo(
		() => data.autoGranted.map((id) => augmentedNodes[id]),
		[augmentedNodes],
	);

	const nodes = useMemo(
		() =>
			Object.entries(data.coords).reduce<Record<string, Node>>(
				(acc, [id, coords]) => {
					const node = { ...augmentedNodes[id], coords };
					return { ...acc, [id]: node as Node };
				},
				{},
			),
		[augmentedNodes, data.coords],
	);

	const { createOnClick, createOnRightClick, selectedNodes } =
		useSelectedNodes(nodes);

	const requiredPointsTiers = useMemo(
		() =>
			Object.keys(
				Object.values(nodes).reduce<Record<string, boolean>>(
					(acc, n) => ({ ...acc, [n.requiredPoints]: true }),
					{},
				),
			).map((n) => parseInt(n, 10)),
		[nodes],
	);

	const selectedNodesPerTier = useMemo(() => {
		const pointsPerTier = Object.entries(selectedNodes).reduce<
			Record<number, number>
		>((acc, [id, value]) => {
			const n = nodes[id];
			return {
				...acc,
				[n.requiredPoints]:
					(acc[n.requiredPoints] || 0) +
					(typeof value === 'number' ? value : 1),
			};
		}, {});

		return requiredPointsTiers.map((_tier, i, arr) =>
			sum(arr.slice(0, i + 1).map((t) => pointsPerTier[t] || 0)),
		);
	}, [nodes, requiredPointsTiers, selectedNodes]);

	const activeNodes = useMemo(
		() =>
			Object.values(nodes).reduce<Record<string, boolean>>((acc, n) => {
				const requiredNodesSatisfied =
					!n.requiredNodes?.length ||
					n.requiredNodes.some((id) => !!selectedNodes[id]);

				const prevTier = requiredPointsTiers.indexOf(n.requiredPoints) - 1;
				const pointsSatisfied =
					n.requiredPoints === 0 ||
					n.requiredPoints <= selectedNodesPerTier[prevTier];

				const isActive = pointsSatisfied && requiredNodesSatisfied;
				return isActive ? { ...acc, [n.id]: true } : acc;
			}, {}),
		[nodes, requiredPointsTiers, selectedNodes, selectedNodesPerTier],
	);

	const onClickFns = useMemo(
		() =>
			Object.keys(nodes).reduce<Record<string, OnClickNode>>(
				(acc, id) => ({
					...acc,
					[id]: createOnClick(id),
				}),
				{},
			),
		[createOnClick, nodes],
	);

	const onRightClickFns = useMemo(
		() =>
			Object.keys(nodes).reduce<Record<string, OnClickNode>>(
				(acc, id) => ({
					...acc,
					[id]: createOnRightClick(id),
				}),
				{},
			),
		[createOnRightClick, nodes],
	);

	const connectors = useMemo(
		() =>
			Object.values(nodes)
				.filter((node) => !!node.requiredNodes)
				.reduce<Connector[]>(
					(acc, node) => [
						...acc,
						...node.requiredNodes!.map((id) => ({
							from: data.coords[id],
							to: node.coords!,
						})),
					],
					[],
				),
		[nodes],
	);

	return useMemo(
		() => ({
			activeNodes,
			autoGranted,
			connectors,
			onClickFns,
			onRightClickFns,
			nodes,
			selectedNodes,
		}),
		[
			activeNodes,
			autoGranted,
			connectors,
			onClickFns,
			onRightClickFns,
			nodes,
			selectedNodes,
		],
	);
}
