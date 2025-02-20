import { Route, Switch } from 'wouter';

import { NotFoundPage } from '~/core/pages';
import { Page } from '~/core/ui';
import { SkillsPlanner } from '~/skilltrees/pages';

import { Navigation } from './Navigation';

export function App() {
	return (
		<Page>
			<Navigation />
			<Switch>
				<Route path="/skillplanner/:archetype">
					<SkillsPlanner />
				</Route>
				<Route>
					<NotFoundPage />
				</Route>
			</Switch>
		</Page>
	);
}
