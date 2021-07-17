import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from '../app/components/Root';

(() => {
	const root = document.getElementById('app-root');
	if (!root) throw new Error('No element with id `app-root` found');

	hydrate(<BrowserRouter><Root /></BrowserRouter>, root, () => {
		const ssrStyles = document.getElementById('ssr-styles');
		if (ssrStyles?.parentNode) ssrStyles.parentNode.removeChild(ssrStyles);
	});
})();
