import { Helmet } from 'react-helmet-async';

export function Head() {
	return (
		<Helmet defaultTitle="AshesDB" titleTemplate="%s | AshesDB">
			<html lang="en" />
		</Helmet>
	);
}
