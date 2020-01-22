import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import axios from '../constants/axios'
import Snackbar from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	card: {
		margin: '10px',
		maxWidth: '90%',
		borderRadius: '10px',
		border: '2px solid #f3f3f3',
		fontFamily: 'NotoSans',
		paddingBottom: '10px',
	},
})
function TransitionUp(props) {
	return <Slide {...props} direction='up' />
}

export default function Models(props) {
	const classes = useStyles()
	const [data, setData] = useState([])
	const [open, setOpen] = useState(false)
	const [transition, setTransition] = useState(undefined)
	const [lockMessage, setLockMessage] = useState('hello i am from lock')

	const handleClick = Transition => {
		console.log(Transition)
		setTransition(Transition)
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	const doLock = async (e, mid, mname) => {
		e.preventDefault()
		console.log(mid)
		var cando = true
		if (!localStorage.getItem('uid')) {
			setLockMessage('You can lock the model only after SignIn')
			handleClick('TransitionUp')
			cando = false
		} else if (cando) {
			await axios
				.post('displayLocked', {
					uid: localStorage.getItem('uid'),
				})
				.then(res => {
					const temp = Object.values(res.data.doc)
					let i
					for (i = 0; i < temp.length; i++) {
						if (temp[i].mid === mid) {
							cando = false
							setLockMessage('You have locked this before')
							handleClick('TransitionUp')
							break
						}
					}
					// console.log(cando)
					// console.log(res.data.doc)
				})
				.catch(e => {
					console.log(e.response)
				}
					)
		}
		
		if (cando ) {
			// await console.log('i am in locking')
			await axios
				.post('lockModel', {
					id: props.id,
					uid: localStorage.getItem('uid'),
					mid: mid,
					name: mname,
					idToken: localStorage.getItem('idToken'),
				})
				.then(res => {
					// console.log(res.data.status)

					setLockMessage(res.data.msg)
					handleClick('TransitionUp')

					// console.log(res)
					
				})
				.catch(e => {
					console.log(e.response)
					setLockMessage('Something Went Wrong, Try Again')
					handleClick('TransitionUp')
				})
		}
	}

	useEffect(() => {
		 console.log(props.id)
		axios
			.post('displayModel', {
				id: props.id,
			})
			.then(res => {
				const tempArray = Object.values(res.data.doc)
				// console.log(tempArray)
				setData(tempArray)
			})
			.catch(e => {
				console.log(e.response)
			})
	}, [props.id])
	return (
		<div>
			

			
				<div className='timeline-heading'> Models </div>
				<Snackbar
					open={open}
					onClose={handleClose}
					TransitionComponent={transition}
					ContentProps={{
						'aria-describedby': 'message-id',
					}}
					message={<span id='message-id'>{lockMessage}</span>}
				/>
				<Grid container spacing={2}>
					{data.map(record => {
						var name = record.name
						name = name.toUpperCase()
						return (
							<Grid item xs={12} md={4} lg={4} key={record.mid}>
								<Card className={classes.card}>
									<CardActionArea>
										<CardMedia
											component='img'
											alt='Contemplative Reptile'
											height='240'
											image={record.url}
											title='Contemplative Reptile'
											style={{ borderBottom: '2px solid #f3f3f3' }}
										/>

										<CardContent className={classes.root}>
											<Typography variant='h5' component='h4'>
												{name}
											</Typography>
											<Typography
												variant='body2'
												color='textSecondary'
												component='p'
											>
												{record.totalLocked} Locks
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions style={{ justifyContent: 'center' }}>
										{record.totalLocked < 3 ? <Button
											variant='contained'
											color='primary'
											onClick={e => doLock(e, record.mid, record.name)}
										>
											Lock
										</Button> : null}
										<a
											href={record.url}
											target='_blank'
											rel='noopener noreferrer'
											style={{ textDecoration: 'none' }}
										>
											<Button
												variant='contained'
												color='secondary'
												// onClick={e => doSubmit(e, record.mid)}
											>
												View
											</Button>
										</a>
									</CardActions>
								</Card>
							</Grid>
						)
					})}
				</Grid>
		
		</div>
	)
}
