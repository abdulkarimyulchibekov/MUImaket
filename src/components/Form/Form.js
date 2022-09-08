import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { DarkMode } from '../DarkMode/DarkMode';
import { ColorModeContext } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/store';
import { useEmail } from '../../hooks/useEmail';
import { usePassword } from '../../hooks/usePassword';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useCheckState } from '../../hooks/useState';

export default function HelperTextMisaligned() {
	const { mode, toggleMode } = React.useContext(ColorModeContext);
	const [state, setState] = useCheckState();
	// const [token, setToken] = React.useState(false);
	// const [password, setPassword] = usePassword();
	const { email, setEmail } = useEmail();
	const navigate = useNavigate();
	const elEmail = React.useRef();
	const elPassword = React.useRef();
	// const password = useStore((state) => state.password);
	const changePassword = useStore((state) => state.changePassword);
	const changeEmail = useStore((state) => state.changeEmail);

	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		if (elEmail?.current?.value && elPassword.current.value) {
			navigate('/private');
			changeEmail(elEmail?.current?.value);
			changePassword(elPassword?.current?.value);

			// const inputVal = elInput.current.value;
			// changePassword(elInput.current.value);
			// elInput.current.value = '';
			if (state) {
				localStorage.setItem('token', JSON.stringify(elEmail.current.value));
			}
		}
	};

	const handleCheckbox = () => {
		setState(!state);
	};

	return (
		<form
			onSubmit={handleFormSubmit}
			style={
				mode === 'light'
					? { flexGrow: 1, padding: 30, background: '#fff' }
					: { flexGrow: 1, padding: 30, background: '#222' }
			}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
				className=''>
				<h2
					style={
						mode === 'light'
							? {
									textAlign: 'center',
									color: '#222',
									margin: 0,
									width: 90,
							  }
							: {
									textAlign: 'center',
									color: '#fff',
									margin: 0,
									width: 90,
							  }
					}>
					Sign in
				</h2>
				<DarkMode style={{ width: 300 }} />
			</div>
			<Stack direction={'column'} spacing={3}>
				<TextField
					type={'email'}
					inputRef={elEmail}
					id='demo-helper-text-misaligned-no-helper'
					label='Email Address '
					required
				/>
				<TextField
					type={'password'}
					inputRef={elPassword}
					id='demo-helper-text-misaligned-no-helper'
					label='Password  '
					required
				/>
				<FormGroup>
					<FormControlLabel
						style={mode === 'light' ? { color: '#222' } : { color: '#fff' }}
						control={<Checkbox />}
						label='Remember Me'
						onChange={handleCheckbox}
						checked={state}
					/>
				</FormGroup>
				<Button type='submit' variant='contained'>
					SIGN IN
				</Button>
			</Stack>
		</form>
	);
}
