import { createUseStyles } from 'react-jss';

export default createUseStyles({
	container: {
		'& + $container': {
			marginLeft: 4,
		},
	},

	header: {
		textAlign: 'center',

		'& > h2': {
			margin: [0, 0, 4],
			fontSize: 18,
			lineHeight: '36px',
		},
	},

	tree: {
		border: [1, 'solid', '#333'],
	},
});
