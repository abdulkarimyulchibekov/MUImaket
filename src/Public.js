import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HelperTextMisaligned from './components/Form/Form';
import {
	ColorModeContext,
	ColorModeContextProvider,
} from './context/ThemeContext';

export const Public = () => {
	const { mode, toggleMode } = React.useContext(ColorModeContext);
	return (
		<div
			style={
				mode === 'light'
					? { display: 'flex', alignItems: 'start', background: '#fff' }
					: { display: 'flex', alignItems: 'start', background: '#222' }
			}
			className='App'>
			<div className=''>
				<img src='https://picsum.photos/800/800' alt='' />
			</div>
			<HelperTextMisaligned />
		</div>
	);
};
