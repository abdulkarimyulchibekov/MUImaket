import { useContext } from 'react';
import { StateContext } from '../context/StateContext';

export const useCheckState = () => {
	const { state, setState } = useContext(StateContext);
	return [state, setState];
};
