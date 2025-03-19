import { useMemo } from 'react';

import { sum } from '~/core/helpers';
import type { SkillTree } from '~/skilltrees/data';

import type { Connector, Node, OnClickNode } from '../types';
import { useSelectedNodes } from './useSelectedNodes';

export function usePlanner(data: SkillTree) {
	const skillToNodeMap = useMemo(
		() =>
			Object.values(data.nodes).reduce<Record<string, string>>((acc, node) => {
				if ('skillId' in node) {
					return { ...acc, [node.skillId]: node.id };
				}

				if ('slotId' in node) {
					const slot = data.slots[node.slotId];
					return slot.skillIds.reduce(
						(innerAcc, skillId) => ({ ...innerAcc, [skillId]: node.id }),
						acc,
					);
				}

				return acc;
			}, {}),
		[data],
	);

	const augmentedNodes = useMemo(
		() =>
			Object.values(data.nodes).reduce<Record<string, Node>>((acc, n) => {
				const node: Partial<Node> = {
					id: n.id,
					requiredPoints: n.pointRequirement,
				};

				if ('skillId' in n) {
					const skill = data.skills[n.skillId];
					const skillRank = data.skillRanks[skill.skillRankIds[0]];

					if ('abilityId' in skillRank) {
						const ability = data.abilities[skillRank.abilityId];
						node.icon = ability.icon;
						node.type = 'ability';
					}

					if ('effectId' in skillRank) {
						const effect = data.effects[skillRank.effectId];
						node.icon = effect.icon;
						node.type = 'effect';
					}
				}

				if ('slotId' in n) {
					node.type = 'choice';
				}

				if (n.skillsRequirement) {
					node.requiredNodes = n.skillsRequirement.map((id) => {
						const req = data.requirements[id];
						if ('nodeId' in req) {
							return req.nodeId;
						}
						return skillToNodeMap[req.skillId];
					});
				}

				return { ...acc, [n.id]: node as Node };
			}, {}),
		[data, skillToNodeMap],
	);

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
