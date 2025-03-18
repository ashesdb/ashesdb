import { useMemo } from 'react';

import type { SkillTree } from '~/skilltrees/data';

import type { Connector, Node } from '../types';

export function usePlanner(data: SkillTree) {
	const activeNodes = useMemo(
		() =>
			Object.values(data.nodes).reduce<Record<string, boolean>>((acc, n) => {
				const isActive =
					n.pointRequirement === 0 && !n.skillsRequirement?.length;

				return isActive ? { ...acc, [n.id]: true } : acc;
			}, {}),
		[data],
	);

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
				const node: Partial<Node> = { id: n.id };

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
		() => ({ activeNodes, autoGranted, connectors, nodes }),
		[activeNodes, autoGranted, connectors, nodes],
	);
}
