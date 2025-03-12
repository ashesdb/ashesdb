import { Route, Switch } from 'wouter';

import { SkillTreePicker } from '~/skilltrees/pages';

export function ToolsPage() {
	return (
		<Switch>
			<Route nest path="/skilltrees">
				<Switch>
					<Route path="/">
						<SkillTreePicker />
					</Route>
				</Switch>
			</Route>
		</Switch>
	);
}
