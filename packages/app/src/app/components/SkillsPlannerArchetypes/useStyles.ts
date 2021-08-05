import { createUseStyles } from 'react-jss';

export default createUseStyles({
	container: {
		display: 'flex'
	},

	archetype: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 200,
		height: 100,
		margin: [10, 5],
		border: [2, 'solid', '#333'],
		borderRadius: 2,
		boxShadow: [
			[0, 2, 1, -1, 'rgba(0, 0, 0, .2)'],
			[0, 1, 1, 0, 'rgba(0, 0, 0, .14)'],
			[0, 1, 3, 0, 'rgba(0, 0, 0, .12)'],
		],
		textDecoration: 'none',
		transform: 'translateY(0)',
		transition: [
			['border-color .2s ease-out'],
			['transform .2s ease-out'],
		],

		'&:hover': {
			borderColor: '#666',
			boxShadow: [
				[0, 3, 3, -2, 'rgba(0, 0, 0, .20)'],
				[0, 3, 4, 0, 'rgba(0, 0, 0, .14)'],
				[0, 1, 8, 0, 'rgba(0, 0, 0, .12)'],
			],
			transform: 'translateY(-2px)',
		},
	},

	disabled: {
		boxShadow: 'none',
		opacity: .25,
		pointerEvents: 'none',
	},
});
