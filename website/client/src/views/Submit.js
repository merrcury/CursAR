import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import NavBar from '../components/NavBar/NavBar'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined'
import axios from '../constants/axios'
import Input from '@material-ui/core/Input'
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
	formControl: {
		margin: theme.spacing(1, 0),
		Width: '100%',
	},
}))

export default function Submit() {
	const classes = useStyles()
	const inputLabel = React.useRef(null)
	const [labelWidth, setLabelWidth] = React.useState(0)
	// const [check, setCheck] = useState(false)
	const [file, setFile] = useState({})
	const [submit, setSubmit] = useState(false)
	const [success, setSuccess] = useState(false)
	const [message, setMessage] = useState(false)
	const [data, setData] = useState([])
	const [mid, setMid] = useState('')
	// const [fileUploadProgress, setFileUploadProgress] = useState(0)
	// const [showProgress, setShowProgress] = useState(false)
	useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth)
		axios
			.post('displayLocked', {
				uid: localStorage.getItem('uid'),
			})
			.then(res => {
				const temp = Object.values(res.data.doc)
				temp.shift()
				// console.log(res.data)
				setData(temp)
				if (temp.length === 0) {
					setSubmit(true)
					setSuccess(false)
					setMessage('You have not locked any model yet')
				}
			})
			.catch(err => {
				console.log(err.response)
				setSubmit(true)
				setSuccess(false)
				setMessage('Please signin before submitting model')
			})
	}, [])

	const doSubmit = e => {
		e.preventDefault()
		if (mid === '' && file === {}) {
			setSubmit(true)
			setSuccess(false)
			setMessage('Please fill all the fields')
		} else if (localStorage.getItem('uid') === null) {
			setSubmit(true)
			setSuccess(false)
			setMessage('Please Login First')
		} else if (file.size > 20480000) {
			setSubmit(true)
			setSuccess(false)
			setMessage('File size should be less than 20Mb')
		} else {
			const formData = new FormData()
			formData.append('file', file)
			formData.append('id', mid[0])
			formData.append('mid', mid)
			formData.append('uid', localStorage.getItem('uid'))
			formData.append('idToken', localStorage.getItem('idToken'))
			formData.append('added', new Date())
			axios
				.post(
					'upload',
					formData
					//  {
					// 	onUploadProgress: p => {
					// 		setShowProgress(true)
					// 		setFileUploadProgress(Math.floor((p.loaded / file.size) * 100))
					// 	},
					// }
				)
				.then(res => {
					// console.log(res.data)
					setSubmit(true)
					setSuccess(true)
					setMessage('Uploaded Successfully')
				})
				.catch(e => {
					console.log(e.response)
					setSubmit(true)
					setSuccess(false)
					setMessage('something went wrong')
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
						<BackupOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Submit
					</Typography>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='name'
									label='Name '
									name='name'
									autoComplete='name'
									value={localStorage.getItem('name')}
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
									value={localStorage.getItem('email')}
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
										Model
									</InputLabel>
									<Select
										labelId='demo-simple-select-outlined-label'
										id='demo-simple-select-outlined'
										value={mid}
										onChange={e => {
											setSubmit(false)
											setMid(e.target.value)
										}}
										labelWidth={labelWidth}
									>
										{/* <MenuItem value=''>
											<em>None</em>
										</MenuItem> */}
										{data.length} !== 0 ?{' '}
										{data.map(record => {
											return (
												<MenuItem
													style={{ minWidth: '100%' }}
													key={record.mid}
													value={record.mid}
												>
													{record.name}
												</MenuItem>
											)
										})}{' '}
										: null
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<Button variant='contained' component='label'>
									Upload Model (Only Zip file max 20Mb in size)
									<Input
										type='file'
										inputProps={{
											accept:
												'zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed,application/tar,application/tar+gzip',
										}}
										style={{ display: 'none' }}
										onChange={e => {
											setSubmit(false)
											setFile(e.target.files[0])
										}}
									/>
								</Button>
							</Grid>
							{/* {showProgress && (
								<Grid item xs={12}>
									<span style={{ color: 'green' }}>
										Uploaded {fileUploadProgress} %
									</span>
								</Grid>
							)} */}
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
									control={
										<Checkbox
											required
											onCheck={e => {
												console.log(e.target.value)
												setCheck(e.target.value)
											}}
											color='primary'
										/>
									}
									label='Is this model made by you?'
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
							Submit
						</Button>
					</form>
				</div>
				<Box mt={5}>{/* <Copyright /> */}</Box>
			</Container>
		</div>
	)
}
