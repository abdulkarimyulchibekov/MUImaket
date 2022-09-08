import { Box, TextField } from '@mui/material';
import React from 'react';
import { ColorModeContext } from '../../context/ThemeContext';
import Checkout from './main';

export const Order = () => {
	const { mode, toggleMode } = React.useContext(ColorModeContext);
	return (
		<Box
			style={
				mode === 'light'
					? { backgroundColor: '#fff' }
					: { backgroundColor: '#222' }
			}>
			<Checkout />
		</Box>
	);
};
