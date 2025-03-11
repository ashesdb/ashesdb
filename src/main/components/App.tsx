import { Route, Switch } from 'wouter';

import { NotFoundPage } from '~/core/pages';
import { Wrapper } from '~/core/ui';

import { ComingSoon } from './ComingSoon';
import { Navigation } from './Navigation';

export function App() {
	return (
		<>
			<Navigation />
			<Wrapper>
				<Switch>
					<Route path="/">
						<ComingSoon />
					</Route>
					<Route>
						<NotFoundPage />
					</Route>
				</Switch>
			</Wrapper>
		</>
	);
}
