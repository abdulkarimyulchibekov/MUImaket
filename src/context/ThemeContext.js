import { createTheme, ThemeProvider } from '@mui/material';
import { createContext, useEffect, useMemo, useState } from 'react';

export const ColorModeContext = createContext({
	toggleMode: () => {},
	mode: 'light',
});

export const ColorModeContextProvider = ({ children }) => {
	const localData = localStorage.getItem('theme');

	const [mode, setMode] = useState(localData ? localData : 'light');

	useEffect(() => {
		localStorage.setItem('theme', mode);
	}, [mode]);

	const colorMode = useMemo(
		() => ({
			toggleMode: () =>
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
			mode,
		}),
		[mode],
	);

	const theme = createTheme({
		palette: {
			mode: mode,
		},
	});
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
