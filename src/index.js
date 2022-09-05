import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/styles/index.css';
import { EmailProvider } from './context/EmailContext';
import { PasswordProvider } from './context/PasswordContext';
import { SearchProvider } from './context/SearchContext';
import { StateProvider } from './context/StateContext';
import { ColorModeContextProvider } from './context/ThemeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<ColorModeContextProvider>
			<EmailProvider>
				<PasswordProvider>
					<StateProvider>
						<SearchProvider>
							<App />
						</SearchProvider>
					</StateProvider>
				</PasswordProvider>
			</EmailProvider>
		</ColorModeContextProvider>
	</BrowserRouter>,
);
