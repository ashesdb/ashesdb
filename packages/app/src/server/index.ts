import 'source-map-support/register';

import express from 'express';

const app = express();
app.disable('x-powered-by');

app.get('/favicon.ico', (_req, res) => {
	res.status(404).end();
});

app.get('*', (_req, res) => {
	res.send('<p>Hello world.</p>');
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
