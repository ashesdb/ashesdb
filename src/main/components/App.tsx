import { Route, Switch } from 'wouter';

import { NotFoundPage } from '~/core/pages';

export function App() {
	return (
		<Switch>
			<Route>
				<NotFoundPage />
			</Route>
		</Switch>
	);
}
