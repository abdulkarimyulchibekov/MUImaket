import {
	Box,
	Checkbox,
	FormControlLabel,
	Stack,
	TextField,
} from '@mui/material';
import React from 'react';

export const AddressForm = () => {
	return (
		<Box>
			<form
				onSubmit={(evt) => {
					evt.preventDefault();
				}}>
				<Stack direction={'column'} spacing={3}>
					<Stack direction={'row'} spacing={10}>
						<TextField
							id='standard-password-input'
							label='First Name'
							type='text'
							autoComplete='current-password'
							variant='standard'
							style={{ flexGrow: 3 }}
							required
						/>
						<TextField
							id='standard-password-input'
							label='Last Name'
							type='password'
							autoComplete='current-password'
							variant='standard'
							style={{ flexGrow: 2 }}
							required
						/>
					</Stack>

					<TextField
						id='standard-password-input'
						label='Address Line 1'
						type='text'
						autoComplete='current-password'
						variant='standard'
						required
					/>
					<TextField
						id='standard-password-input'
						label='Address Line 2'
						type='password'
						autoComplete='current-password'
						variant='standard'
						required
					/>
					<Stack direction={'row'} spacing={10}>
						<TextField
							id='standard-password-input'
							label='City'
							type='text'
							autoComplete='current-password'
							variant='standard'
							style={{ flexGrow: 3 }}
							required
						/>
						<TextField
							id='standard-password-input'
							label='State/Province/Region'
							type='text'
							autoComplete='current-password'
							variant='standard'
							style={{ flexGrow: 2 }}
						/>
					</Stack>
					<Stack direction={'row'} spacing={10}>
						<TextField
							id='standard-password-input'
							label='Zip / Postal Code'
							type='text'
							autoComplete='current-password'
							variant='standard'
							style={{ flexGrow: 3 }}
							required
						/>
						<TextField
							id='standard-password-input'
							label='Country'
							type='text'
							autoComplete='current-password'
							variant='standard'
							style={{ flexGrow: 2 }}
							required
						/>
					</Stack>
					<FormControlLabel
						control={<Checkbox />}
						label='Use this address for payment detailes'
					/>
				</Stack>
			</form>
		</Box>
	);
};
