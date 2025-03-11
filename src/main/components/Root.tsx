import { FlagsProvider, LocalStorageFlagsClient } from '~/core/flags';

import { App } from './App';

const flagsClient = new LocalStorageFlagsClient('flags');

export function Root() {
	return (
		<FlagsProvider client={flagsClient}>
			<App />
		</FlagsProvider>
	);
}
