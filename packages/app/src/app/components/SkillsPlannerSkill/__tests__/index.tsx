import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import SkillsPlannerSkill from '..';

const fireball = {
	kind: 'active',
	id: 'fireball',
	name: 'Fireball',
	icon: 'fireball-icon.png',
	cost: 1,
	ranks: [
		'Throws a fireball at your target, dealing direct damage.',
		'Becomes a burn (damage over time).',
		'Area of effect around the target.',
	],
};

describe('<SkillsPlannerSkill />', () => {
	it('should render relevant controls and current point count', () => {
		render(<SkillsPlannerSkill points={1} skill={fireball} onChange={() => {}} />);
		const removeButton = screen.getByRole('button', { name: '-' });
		expect(removeButton).toBeInTheDocument();
		expect(removeButton).not.toBeDisabled();

		const addButton = screen.getByRole('button', { name: '+' });
		expect(addButton).toBeInTheDocument();
		expect(addButton).not.toBeDisabled();

		expect(screen.getByText('1')).toBeInTheDocument();
	});

	it('should not call the onChange handler when "remove" is pressed at 0 points', () => {
		const handleChange = jest.fn();
		render(<SkillsPlannerSkill points={0} skill={fireball} onChange={handleChange} />);

		const button = screen.getByRole('button', { name: '-' });
		expect(button).toBeDisabled();
		fireEvent.click(button);
		expect(handleChange).not.toHaveBeenCalled();
	});

	it('should call the onChange handler with "-1" when "remove" is pressed', () => {
		const handleChange = jest.fn();
		render(<SkillsPlannerSkill points={1} skill={fireball} onChange={handleChange} />);

		fireEvent.click(screen.getByRole('button', { name: '-' }));
		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith(-1);
	});

	it('should not call the onChange handler when "add" is pressed at maximum points', () => {
		const handleChange = jest.fn();
		render(<SkillsPlannerSkill points={3} skill={fireball} onChange={handleChange} />);

		const button = screen.getByRole('button', { name: '+' });
		expect(button).toBeDisabled();
		fireEvent.click(button);
		expect(handleChange).not.toHaveBeenCalled();
	});

	it('should call the onChange handler with "1" when "add" is pressed', () => {
		const handleChange = jest.fn();
		render(<SkillsPlannerSkill points={0} skill={fireball} onChange={handleChange} />);

		fireEvent.click(screen.getByRole('button', { name: '+' }));
		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith(1);
	});
});
