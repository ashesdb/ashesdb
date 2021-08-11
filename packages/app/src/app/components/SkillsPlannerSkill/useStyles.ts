import { createUseStyles } from 'react-jss';

export default createUseStyles({
	container: {
		position: 'relative',
		width: 100,
		height: 100,
		background: 'transparent no-repeat center / cover',
		border: [1, 'solid', '#333'],

		'&::before': {
			content: '""',
			position: 'absolute',
			zIndex: 1,
			top: 0,
			right: 0,
			width: 0,
			height: 0,
			border: [15, 'solid', 'transparent'],
			borderTopColor: '#333',
			borderRightColor: '#333',
		},

		'& + $container': {
			marginLeft: 10,
		},
	},

	points: {
		position: 'absolute',
		zIndex: 2,
		top: 0,
		right: 4,
		fontSize: 12,
		lineHeight: '16px',
	},

	actions: {
		display: 'flex',
		justifyContent: 'center',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: -5,

		'& > button': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: 20,
			height: 20,
			padding: 0,
			border: 0,
			borderRadius: 2,
		},
	},

	remove: {
	},

	add: {
		marginLeft: 20,
	},
});
