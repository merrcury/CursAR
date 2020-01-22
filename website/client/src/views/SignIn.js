import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import axios from '../constants/axios'

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

export default function SignIn() {
	const classes = useStyles()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [submit, setSubmit] = useState(false)
	const [success, setSuccess] = useState(false)
	const [message, setMessage] = useState(false)
	const doSubmit = e => {
		e.preventDefault()
		if (email === '' || password === '') {
			setSubmit(true)
			setSuccess(false)
			setMessage('Please Fill All Fields')
		} else {
			axios
				.post('signin', {
					email,
					password,
				})
				.then(res => {
					// console.log(res.data.doc.user.uid)
					// console.log(res.data.doc.user.emailVerified)
					// console.log(res.data.idToken)
					// console.log(res.data)
					localStorage.setItem('email', res.data.doc.user.email)
					localStorage.setItem('uid', res.data.doc.user.uid)
					localStorage.setItem('isVerified', res.data.doc.user.emailVerified)
					localStorage.setItem('idToken', res.data.idToken)
					localStorage.setItem('name', res.data.doc.user.displayName)
					localStorage.setItem('isAdmin', 'no')
					if (!res.data.doc.user.emailVerified) {
						setSubmit(true)
						setSuccess(false)
						setMessage('Please verify your email first and login again')
					} else {
						setSuccess(true)
						setSubmit(true)
						setMessage('SignIn Succcessful')
						setTimeout(() => {
							window.location.pathname = '/'
						}, 2000)
					}
				})
				.catch(e => {
					setSubmit(true)
					setSuccess(false)
					if (e.response === undefined) {
						setMessage('Something Went Wrong, Try Again')
					} else {
						setMessage(e.response.data.msg.message)
					}
					console.log(e.response)
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
						Sign in
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
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							onChange={e => {
								setPassword(e.target.value)
								setSubmit(false)
							}}
						/>
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
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link to='/forgotpass' variant='body2'>
									Forgot password?
								</Link>
							</Grid>

							<Grid item>
								<Link to='/signup' variant='body2'>
									{"Don't have an account? Sign Up"}
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
