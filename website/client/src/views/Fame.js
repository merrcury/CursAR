import React, { useState, useEffect } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import axios from '../constants/axios'
import NavBar from '../components//NavBar/NavBar'
export default function DenseTable() {
	const [data, setData] = useState([])

	useEffect(() => {
		axios
			.get('sort')
			.then(res => {
				var temp = res.data.result
				for( var i = 0; i < temp.length; i++){ 
				   if ( temp[i].value === 0) {
				     temp.splice(i, 1); 
				   }
				}
								 console.log(res.data.result)
				setData(temp)
				
			})
			.catch(err => {
				console.log(err.response)
			})
	}, [])
	return (
		<div>
			<NavBar />
			<div className='timeline-heading'> Top Contributors </div>
			<div
				style={{
					marginTop: '20px',
					marginBottom: '10px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						width: '80%',
						margin: 'auto',
					}}
				>
					<Paper>
						<TableContainer>
							<Table stickyHeader aria-label='sticky table'>
								<TableHead>
									<TableRow>
										<TableCell align='center'>Sr. No.</TableCell>
										<TableCell align='center'>Name</TableCell>
										<TableCell align='center'>Submitted</TableCell>
										<TableCell align='center'>Accepted</TableCell>
										{/* <TableCell align='center'>Message</TableCell> */}
									</TableRow>
								</TableHead>
								<TableBody>
									{data.map((row, i) => (
										<TableRow key={i + 1}>
											<TableCell align='center'>{i + 1}</TableCell>
											<TableCell align='center'>{row.name}</TableCell>
											{/* <TableCell align='center'>
												{row.fname + ' '}
												{row.lname}
											</TableCell> */}
											<TableCell align='center'>
												{row.uploaded}
											</TableCell>
											<TableCell align='center'>
												{row.accepted}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
								
							</Table>
						</TableContainer>
					</Paper>
				</div>
			</div>
		</div>
	)
}
