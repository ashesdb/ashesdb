import { Route, Switch } from 'wouter';

import { FlagWall } from '~/core/flags';
import { NotFoundPage } from '~/core/pages';
import { Wrapper } from '~/core/ui';
import { ToolsPage } from '~/tools/pages';

import { Home } from './Home';
import { Navigation } from './Navigation';

export function App() {
	return (
		<>
			<Navigation />
			<Wrapper>
				<Switch>
					<Route path="/">
						<Home />
					</Route>
					<FlagWall name="skilltrees">
						<Route nest path="/tools">
							<ToolsPage />
						</Route>
					</FlagWall>
					<Route>
						<NotFoundPage />
					</Route>
				</Switch>
			</Wrapper>
		</>
	);
}
