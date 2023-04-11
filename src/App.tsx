// Packages
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Routes
import Scrap from './routes/Scrap';
import Home from './routes/Home';

// Components
import TabNavigator from './components/TabNavigator';
import { AppContainer } from './assets/styles/app.style';

function App() {
	return (
		<AppContainer>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/scrap' element={<Scrap />} />
			</Routes>
			<TabNavigator />
		</AppContainer>
	);
}

export default App;
