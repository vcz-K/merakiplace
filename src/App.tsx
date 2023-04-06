import React from 'react';
import Home from './routes/Home';
import { AppContainer } from './assets/styles/app.style';
import TabNavigator from './components/TabNavigator';
import { Route, Routes } from 'react-router-dom';
import Scrap from './routes/Scrap';

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
