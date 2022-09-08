import {
	Box,
	Checkbox,
	FormControlLabel,
	Stack,
	TextField,
} from '@mui/material';
import React from 'react';

export const PaymentForm = () => {
	return (
		<Box style={{ height: '40.4vh' }}>
			<Stack direction={'column'} spacing={3}>
				<Stack direction={'row'} spacing={10}>
					<TextField
						id='standard-password-input'
						label='Name on Card *'
						type='text'
						autoComplete='current-password'
						variant='standard'
						style={{ flexGrow: 3 }}
					/>
					<TextField
						id='standard-password-input'
						label='Card number *'
						type='password'
						autoComplete='current-password'
						variant='standard'
						style={{ flexGrow: 2 }}
					/>
				</Stack>

				<Stack direction={'row'} spacing={10}>
					<TextField
						id='standard-password-input'
						label='Expire date *'
						type='text'
						autoComplete='current-password'
						variant='standard'
						style={{ flexGrow: 3 }}
					/>
					<TextField
						id='standard-password-input'
						label='CVV *'
						type='password'
						autoComplete='current-password'
						variant='standard'
						style={{ flexGrow: 2 }}
					/>
				</Stack>

				<FormControlLabel
					control={<Checkbox />}
					label='Remember credit card details for next time'
				/>
			</Stack>
		</Box>
	);
};
