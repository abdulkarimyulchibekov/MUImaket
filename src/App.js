import { Public } from './Public';
import { Routes, Route } from 'react-router-dom';
import { Private } from './Private';
import { useStore } from './store/store';
import { useRef } from 'react';
import { Order } from './pages/Order/Order';
import { Price } from './pages/Price/Price';
import { SearchAppBar } from './components/AppBar/AppBar';

function App() {
	const password = useStore((state) => state.password);
	const changePassword = useStore((state) => state.changePassword);
	const LocalData = JSON.parse(localStorage.getItem('token'));
	const elInput = useRef();

	const changeInputPassword = () => {
		const inputVal = elInput.current.value;
		changePassword(elInput.current.value);
		console.log(inputVal);
		console.log(password);
		elInput.current.value = '';
	};

	return (
		<>
			<SearchAppBar />
			<Routes>
				<Route path='/' element={LocalData ? <Private /> : <Public />} />
				<Route path='/private' element={<Private />} />
				<Route path='/order' element={<Order />} />
				<Route path='/price' element={<Price />} />
			</Routes>
		</>
	);
}

export default App;
