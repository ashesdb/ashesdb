import { ErrorPage } from './ErrorPage';

export function NotFoundPage() {
	return (
		<ErrorPage
			title={
				<>
					Not<span>Found</span>
				</>
			}
			message="Nothing to see here (yet)."
		/>
	);
}
