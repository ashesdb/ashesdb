import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';

import { FlagsProvider, LocalStorageFlagsClient } from '~/core/flags';

import { App } from './App';
import { Head } from './Head';

const flagsClient = new LocalStorageFlagsClient('flags');
const queryClient = new QueryClient();

export function Root() {
	return (
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<FlagsProvider client={flagsClient}>
					<Head />
					<App />
				</FlagsProvider>
			</QueryClientProvider>
		</HelmetProvider>
	);
}
