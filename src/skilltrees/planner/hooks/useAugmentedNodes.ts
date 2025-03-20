import { useMemo } from 'react';

import type { SkillTree } from '~/skilltrees/data';

import type { Node } from '../types';

export function useAugmentedNodes(data: SkillTree) {
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
	return useMemo(
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
						node.name = ability.name;
						node.description = ability.description;
						node.icon = ability.icon;
						node.type = 'ability';
					}

					if ('effectId' in skillRank) {
						const effect = data.effects[skillRank.effectId];
						node.name = effect.name;
						node.description = effect.description;
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
}
