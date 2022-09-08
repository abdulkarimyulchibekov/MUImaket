import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { DarkMode } from '../DarkMode/DarkMode';
import { useSearch } from '../../hooks/useSearch';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import GradingRoundedIcon from '@mui/icons-material/GradingRounded';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PriceChangeSharpIcon from '@mui/icons-material/PriceChangeSharp';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

export function SearchAppBar() {
	const elInput = React.useState('');
	const [search, setSearch] = useSearch();
	const navigate = useNavigate();

	const handleLogOut = () => {
		localStorage.removeItem('token');
		navigate('/');
		document.location.reload();
	};

	const handleOrder = () => {
		navigate('/order');
	};

	const handlePageChange = () => {
		navigate('/private');
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<List>
				<ListItem disablePadding>
					<ListItemButton
						onClick={() => {
							navigate('/price');
						}}>
						<ListItemIcon>
							<PriceChangeSharpIcon />
						</ListItemIcon>
						<ListItemText>Price Page</ListItemText>
					</ListItemButton>
				</ListItem>
				{['Inbox', 'Starred'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>

			<Divider />

			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={handlePageChange}>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText>Home Page</ListItemText>
					</ListItemButton>
				</ListItem>

				{['All mail'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}

				<ListItem disablePadding>
					<ListItemButton onClick={handleLogOut}>
						<ListItemIcon>
							<LogoutIcon />
						</ListItemIcon>
						<ListItemText>Log Out</ListItemText>
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton onClick={handleOrder}>
						<ListItemIcon>
							<GradingRoundedIcon />
						</ListItemIcon>
						<ListItemText>Order</ListItemText>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='open drawer'
						sx={{ mr: 2 }}>
						{['left'].map((anchor) => (
							<React.Fragment key={anchor}>
								<MenuIcon onClick={toggleDrawer(anchor, true)} />
								<SwipeableDrawer
									anchor={anchor}
									open={state[anchor]}
									onClose={toggleDrawer(anchor, false)}
									onOpen={toggleDrawer(anchor, true)}>
									{list(anchor)}
								</SwipeableDrawer>
							</React.Fragment>
						))}
					</IconButton>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{
							flexGrow: 1,
							width: 200,
							display: { xs: 'none', sm: 'block' },
						}}>
						Albom Layout
					</Typography>
					<DarkMode />
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder='Search…'
							inputProps={{ 'aria-label': 'search' }}
							inputRef={elInput}
							onChange={(evt) => {
								setSearch(elInput.current?.value);
							}}
						/>
					</Search>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
