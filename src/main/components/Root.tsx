import { FlagsProvider, LocalStorageFlagsClient } from '~/core/flags';

import { MaybeApp } from './MaybeApp';

const flagsClient = new LocalStorageFlagsClient('flags');

export function Root() {
	return (
		<FlagsProvider client={flagsClient}>
			<MaybeApp />
		</FlagsProvider>
	);
}
