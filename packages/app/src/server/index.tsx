import 'source-map-support/register';

import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';

import Root from '../app/components/Root';

import { renderDocument } from './utils';

const app = express();
app.disable('x-powered-by');

app.use(express.static(`${__dirname}/public`));

app.get('/favicon.ico', (_req, res) => {
	res.status(404).end();
});

app.get('*', (req, res) => {
	const markup = renderDocument(
		<StaticRouter location={req.url}>
			<Root />
		</StaticRouter>
	);
	res.send(markup);
});

const port = 4700;
const srv = app.listen(port, () => {
	console.info(`ASHESDB:APP listening on :${port}`);
});

function shutdown() {
	srv.close();
	process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
