import { Route, Switch } from 'wouter';

import { SkillTreePicker, SkillTreePlanner } from '~/skilltrees/pages';

export function ToolsPage() {
	return (
		<Switch>
			<Route nest path="/skilltrees">
				<Switch>
					<Route path="/">
						<SkillTreePicker />
					</Route>
					<Route path="/archetype/:archetypeName">
						<SkillTreePlanner />
					</Route>
				</Switch>
			</Route>
		</Switch>
	);
}
