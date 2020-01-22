import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
// import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import axios from '../constants/axios'
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
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

export default function SignUp() {
	const classes = useStyles()
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [success, setSuccess] = useState(false)
	const [submit, setSubmit] = useState(false)
	const [message, setMessage] = useState('')
	const doSubmit = e => {
		e.preventDefault()
		if (fname === '' || lname === '' || email === '' || password === '') {
			setSubmit(true)
			setSuccess(false)
			setMessage('Please Fill Out All The Fields')
		} else {
			axios
				.post('signup', {
					fname,
					lname,
					email,
					password,
				})
				.then(res => {
					// console.log('i am in then')
					// console.log(res.data)
					setMessage(res.data.msg)
					setSuccess(true)
					setSubmit(true)
					setTimeout(() => {
						window.location.pathname = '/signin'
					}, 2000)
				})
				.catch(e => {
					setSuccess(false)
					if (e.response === undefined) {
						setMessage('Something Went Wrong, Try Again')
					} else {
						setMessage(e.response.data.msg)
					}
					console.log(e.response)
					
					setSubmit(true)
					
				})
		}
		// console.log('I am working')
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
						Sign up
					</Typography>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete='fname'
									name='firstName'
									variant='outlined'
									required
									fullWidth
									id='firstName'
									label='First Name'
									autoFocus
									onChange={e => {
										setFname(e.target.value)
										setSubmit(false)
									}}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='lastName'
									label='Last Name'
									name='lastName'
									autoComplete='lname'
									onChange={e => {
										setLname(e.target.value)
										setSubmit(false)
									}}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
									onChange={e => {
										setEmail(e.target.value)
										setSubmit(false)
									}}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
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
							</Grid>
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
							{/* <Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value='allowExtraEmails' color='primary' />}
								label='I want to receive inspiration, marketing promotions and updates via email.'
							/>
						</Grid> */}
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
							onClick={e => doSubmit(e)}
						>
							Sign Up
						</Button>
						<Grid container justify='flex-end'>
							<Grid item>
								<Link to='/signin' variant='body2'>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={5}>{/* <Copyright /> */}</Box>
			</Container>
		</div>
	)
}
