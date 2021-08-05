import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Center from '../Center';
import SkillsPlannerContainer from '../SkillsPlannerContainer';

export default function App() {
	return (
		<Routes>
			<Route path="skills-planner/*" element={<Center><SkillsPlannerContainer /></Center>} />
		</Routes>
	);
}
