import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FlagsProvider, LocalStorageFlagsClient } from '~/core/flags';

import { App } from './App';

const flagsClient = new LocalStorageFlagsClient('flags');
const queryClient = new QueryClient();

export function Root() {
	return (
		<QueryClientProvider client={queryClient}>
			<FlagsProvider client={flagsClient}>
				<App />
			</FlagsProvider>
		</QueryClientProvider>
	);
}
