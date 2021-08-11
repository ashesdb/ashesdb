import { createUseStyles } from 'react-jss';

export default createUseStyles({
	container: {
		display: 'flex',
		position: 'relative',
		padding: [10, 10, 15],
	},

	overlay: {
		content: '""',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		zIndex: 3,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: 'rgba(20, 20, 20, .75)',
		transition: 'opacity .15s ease-out',

		'& > p': {
			margin: 0,
		},
	},

	unlocked: {
		'& > $overlay': {
			opacity: 0,
			pointerEvents: 'none',
		},
	},
});
