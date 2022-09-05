import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import SearchAppBar from './components/AppBar/AppBar';
import ImgMediaCard from './components/Card/Card';
import { ColorModeContext } from './context/ThemeContext';
import { useEmail } from './hooks/useEmail';
import { usePassword } from './hooks/usePassword';
import { useCheckState, useState } from './hooks/useState';
import { useNavigate } from 'react-router-dom';
import { ListItem, Typography } from '@mui/material';
import { useSearch } from './hooks/useSearch';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export const Private = () => {
	const { mode, toggleMode } = React.useContext(ColorModeContext);
	const arr = [
		{
			name: 'Lizard',
			desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica',
		},
		{
			name: 'hizard',
			desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica',
		},
		{
			name: 'Mizard',
			desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica',
		},
		{
			name: 'Gizard',
			desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica',
		},
		{
			name: 'Nizard',
			desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica',
		},
		{
			name: 'tizard',
			desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica',
		},
		{
			name: 'uizard',
			desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica',
		},
		{
			name: 'bizard',
			desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica',
		},
		{
			name: 'qizard',
			desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica',
		},
	];
	const { email, setEmail } = useEmail();
	const [password, setPassword] = usePassword();
	const navigate = useNavigate();
	// const [state] = useCheckState();
	const [search, setSearch] = useSearch();
	console.log(search);
	return (
		<div
			style={
				mode === 'light' ? { background: '#fff' } : { background: '#222' }
			}>
			<SearchAppBar />
			<Typography
				style={
					mode === 'light'
						? { textAlign: 'center', marginTop: 30, color: '#222' }
						: { textAlign: 'center', marginTop: 30, color: '#fff' }
				}
				variant='h2'
				gutterBottom>
				{email}
			</Typography>
			<Typography
				style={
					mode === 'light'
						? { textAlign: 'center', color: '#222' }
						: { textAlign: 'center', color: '#fff' }
				}
				variant='h3'
				gutterBottom>
				{password}
			</Typography>
			<Container style={{ marginTop: 50 }}>
				<ul
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						listStyle: 'none',
						margin: 0,
						padding: 0,
					}}>
					{arr
						.filter((items) => {
							if (search === '') {
								return items;
							} else if (
								items?.name &&
								items.name.toLowerCase().includes(search.toLowerCase())
							) {
								return items;
							}
						})
						.map((e) => (
							<li style={{ marginBottom: 50 }} key={e}>
								<Card sx={{ maxWidth: 345 }}>
									<CardMedia
										component='img'
										alt='green iguana'
										height='140'
										image='https://picsum.photos/200/300'
									/>
									<CardContent>
										<Typography gutterBottom variant='h5' component='div'>
											{e.name}
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											{e.desc}
										</Typography>
									</CardContent>
									<CardActions>
										<Button size='small'>Share</Button>
										<Button size='small'>Learn More</Button>
									</CardActions>
								</Card>
							</li>
						))}
				</ul>
			</Container>
		</div>
	);
};
