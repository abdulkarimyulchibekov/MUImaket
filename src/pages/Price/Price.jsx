import { Box, Typography } from '@mui/material';
import React from 'react';
import { ColorModeContext } from '../../context/ThemeContext';

export const Price = () => {
	const { mode } = React.useContext(ColorModeContext);
	return (
		<Box
			style={
				mode === 'light'
					? { background: '#fff', height: '88.1vh' }
					: { background: '#222', height: '88.1vh' }
			}>
			<Typography
				variant='h3'
				style={
					mode === 'light'
						? {
								textAlign: 'center',
								fontWeight: '600',
								paddingTop: 50,
								color: '#222',
								marginBottom: 20,
						  }
						: {
								textAlign: 'center',
								fontWeight: '600',
								paddingTop: 50,
								color: '#fff',
								marginBottom: 20,
						  }
				}>
				Pricing
			</Typography>
			<Typography
				variant='h6'
				style={
					mode === 'light'
						? {
								textAlign: 'center',
								fontWeight: '400',
								color: '#555',
								width: 400,
								marginLeft: 'auto',
								marginRight: 'auto',
						  }
						: {
								textAlign: 'center',
								fontWeight: '400',
								color: '#777',
								width: 400,
								marginLeft: 'auto',
								marginRight: 'auto',
						  }
				}>
				Quickly build an effective pricing table for your potential customers
				with this layout. It's built with default MUI components with little
				customization.
			</Typography>
		</Box>
	);
};
