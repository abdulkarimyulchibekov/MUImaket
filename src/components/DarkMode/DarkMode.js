import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../../context/ThemeContext';

export const DarkMode = () => {
	const { mode, toggleMode } = React.useContext(ColorModeContext);
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'transparent',
				color: 'text.primary',
				borderRadius: 1,
				p: 3,
			}}>
			{mode?.palette?.mode}
			<IconButton sx={{ ml: 1 }} onClick={toggleMode} color='inherit'>
				{mode?.palette?.mode === 'dark' ? (
					<Brightness7Icon />
				) : (
					<Brightness4Icon />
				)}
			</IconButton>
		</Box>
	);
};
