import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';

import { FlagsProvider, LocalStorageFlagsClient } from '~/core/flags';
import { ThemeProvider } from '~/core/theme';

import { App } from './App';
import { Head } from './Head';

const flagsClient = new LocalStorageFlagsClient('flags');
const queryClient = new QueryClient();

export function Root() {
	return (
		<HelmetProvider>
			<ThemeProvider>
				<QueryClientProvider client={queryClient}>
					<FlagsProvider client={flagsClient}>
						<Head />
						<App />
					</FlagsProvider>
				</QueryClientProvider>
			</ThemeProvider>
		</HelmetProvider>
	);
}
