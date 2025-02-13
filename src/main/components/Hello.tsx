import { ErrorPage } from '~/core/pages';

export function Hello() {
	return (
		<ErrorPage
			title={
				<>
					Ashes<span>DB</span>
				</>
			}
			message="Coming soon(ish)."
		/>
	);
}
