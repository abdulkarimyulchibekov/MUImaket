import { Public } from './Public';
import { Routes, Route } from 'react-router-dom';
import { Private } from './Private';

function App() {
	const LocalData = JSON.parse(localStorage.getItem('token'));
	return (
		<Routes>
			<Route path='/' element={LocalData ? <Private /> : <Public />} />
			<Route path='/private' element={<Private />} />
		</Routes>
	);
}

export default App;
