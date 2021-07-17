import { createUseStyles } from 'react-jss';

export default createUseStyles({
	'@global': {
		html: {
			background: '#222',
			color: '#ccc',
			font: '300 18px/24px Roboto, sans-serif',
		},
		body: {
			margin: 0,
		},
		strong: {
			fontWeight: 500,
		},
		a: {
			color: '#eee',
		},
	},
});
