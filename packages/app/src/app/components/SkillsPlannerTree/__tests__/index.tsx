import { render, screen } from '@testing-library/react';
import React from 'react';

import SkillsPlannerTree from '..';

const tree = {
	id: 'active',
	name: 'Active',
	color: '#747030',
};

describe('<SkillsPlannerTree />', () => {
	it('should render tree and its children', () => {
		render(
			<SkillsPlannerTree points={0} tree={tree}>
				<p>beep boop</p>
			</SkillsPlannerTree>,
		);
		expect(screen.getByText('Active (0)')).toBeInTheDocument();
		expect(screen.getByText('beep boop')).toBeInTheDocument();
	});
});
