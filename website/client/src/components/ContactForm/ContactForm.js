import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
// import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import axios from '../../constants/axios'
import SendIcon from '@material-ui/icons/Send'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
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

const FormPage = () => {
	const classes = useStyles()
	const inputLabel = React.useRef(null)
	const [labelWidth, setLabelWidth] = React.useState(0)
	const [fname, setFname] = useState('')
	const [lname, setLname] = useState('')
	const [email, setEmail] = useState('')
	const [success, setSuccess] = useState(false)
	const [submit, setSubmit] = useState(false)
	const [submitMessage, setSubmitMessage] = useState('')
	const [message, setMessage] = useState('')
	const [user, setUser] = useState('')
	useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth)
	}, [])
	const doSubmit = e => {
		e.preventDefault()
		axios
			.post('feedback', {
				fname: fname,
				lname: lname,
				email: email,
				message: message,
				user: user,
				type: 'feedback',
			})
			.then(res => {
				// console.log(res.data)
				setSubmit(true)
				setSuccess(true)
				setSubmitMessage('Thanks for your valuable feedback')
				setFname('')
				setLname('')
				setEmail('')
				setMessage('')
				setTimeout(() => {
					setSubmitMessage('')
				}, 2000)
			})
			.catch(err => {
				console.log(err.response)
				setSuccess(false)
				setSubmit(true)
				setSubmitMessage('Something Went Wrong, Try Again')
			})
		// console.log('i am in submit')
	}
	return (
		<div
			style={{
				backgroundColor: '#E2E2E3',
				paddingTop: '15px',
				paddingBottom: '15px',
			}}
		>
			<Container component='main' maxWidth='sm'>
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<MailOutlineIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Give Us FeedBack
					</Typography>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									value={fname}
									autoComplete='fname'
									name='firstName'
									variant='outlined'
									fullWidth
									id='firstName'
									label='First Name'
									onChange={e => {
										setFname(e.target.value)
										setSubmit(false)
									}}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									value={lname}
									variant='outlined'
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
									value={email}
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
								<FormControl
									variant='outlined'
									style={{ minWidth: '100%' }}
									className={classes.formControl}
								>
									<InputLabel
										ref={inputLabel}
										id='demo-simple-select-outlined-label'
									>
										You Are
									</InputLabel>
									<Select
										labelId='demo-simple-select-outlined-label'
										id='demo-simple-select-outlined'
										value={user}
										onChange={e => {
											setSubmit(false)
											setUser(e.target.value)
										}}
										labelWidth={labelWidth}
									>
										<MenuItem style={{ minWidth: '100%' }} value='Student'>
											Student
										</MenuItem>
										<MenuItem style={{ minWidth: '100%' }} value='Other'>
											Designer
										</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<TextField
									value={message}
									rows={3}
									multiline={true}
									variant='outlined'
									required
									fullWidth
									name='message'
									label='Message'
									id='message'
									onChange={e => {
										setMessage(e.target.value)
										setSubmit(false)
									}}
								/>
							</Grid>
							{submit && !success && (
								<Grid item xs={12}>
									<span style={{ color: 'red' }}>{submitMessage}</span>
								</Grid>
							)}
							{submit && success && (
								<Grid item xs={12}>
									<span style={{ color: 'green' }}>{submitMessage}</span>
								</Grid>
							)}
							{/* <Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value='allowExtraEmails' color='primary' />}
								label='I want to receive inspiration, marketing promotions and updates via email.'
							/>
						</Grid> */}
						</Grid>

						<Grid container justify='center'>
							<Grid item>
								<Button
									type='submit'
									variant='contained'
									color='primary'
									className={classes.submit}
									onClick={e => doSubmit(e)}
									endIcon={<SendIcon />}
								>
									Send
								</Button>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={5}>{/* <Copyright /> */}</Box>
			</Container>
		</div>
	)
}

export default FormPage
