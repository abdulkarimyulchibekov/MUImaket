import { useContext } from 'react';
import { PasswordContext } from '../context/PasswordContext';

export const usePassword = () => {
	const { password, setPassword } = useContext(PasswordContext);
	return [password, setPassword];
};
