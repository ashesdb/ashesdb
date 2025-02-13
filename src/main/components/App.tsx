import { Route, Switch } from 'wouter';

import { NotFoundPage } from '~/core/pages';
import { Page } from '~/core/ui';

import { Navigation } from './Navigation';

export function App() {
	return (
		<Page>
			<Navigation />
			<Switch>
				<Route>
					<NotFoundPage />
				</Route>
			</Switch>
		</Page>
	);
}
