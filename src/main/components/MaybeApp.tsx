import { useFlag } from '~/core/flags';

import { App } from './App';
import { Hello } from './Hello';

export function MaybeApp() {
	const hasAccess = useFlag('access');
	if (!hasAccess) {
		return <Hello />;
	}

	return <App />;
}
