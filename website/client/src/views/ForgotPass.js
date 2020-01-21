import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import NavBar from '../components/NavBar/NavBar'
import axios from '../constants/axios'
// import { Link } from 'react-router-dom'
// function Copyright() {
// 	return (
// 		<Typography variant='body2' color='textSecondary' align='center'>
// 			{'Copyright © '}
// 			<Link color='inherit' href='https://material-ui.com/'>
// 				Your Website
// 			</Link>{' '}
// 			{new Date().getFullYear()}
// 			{'.'}
// 		</Typography>
// 	)
// }

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

export default function ForgotPass() {
	const classes = useStyles()
	const [email, setEmail] = useState('')
	const [submit, setSubmit] = useState(false)
	const [success, setSuccess] = useState(false)
	const [message, setMessage] = useState(false)

	const doSubmit = e => {
		e.preventDefault()
		if (email === '') {
			setSubmit(true)
			setMessage('Password field cannot be empty')
		} else {
			axios
				.post('passwordReset', {
					email,
				})
				.then(res => {
					setSubmit(true)
					setSuccess(true)
					setMessage(
						'Password reset instructions has been sent to your emailid'
					)
					// console.log(res.data.msg)
				})
				.catch(e => {
					setSubmit(true)
					setSuccess(false)
					setMessage(e.response.data.error.message)
					// console.log(e.response.data.error.message)
				})
		}
	}
	return (
		<div>
			<NavBar bgColor='#e2e2e3' />

			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Forgot Password
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							onChange={e => {
								setEmail(e.target.value)
								setSubmit(false)
							}}
						/>
						{/* <TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
					/> */}
						{/* <FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label='Remember me'
					/> */}
						{submit && !success && (
							<Grid item xs={12}>
								<span style={{ color: 'red' }}>{message}</span>
							</Grid>
						)}
						{submit && success && (
							<Grid item xs={12}>
								<span style={{ color: 'green' }}>{message}</span>
							</Grid>
						)}
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
							onClick={e => {
								doSubmit(e)
							}}
						>
							Submit
						</Button>
						<Grid container justify='flex-end'>
							<Grid item>
								<Link to='/signup' variant='body2'>
									Don't have an account? Sign Up
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={8}>{/* <Copyright /> */}</Box>
			</Container>
		</div>
	)
}
