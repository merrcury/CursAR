import React, { Component } from 'react'
import './Banner.css'
import Typing from '../Typing/Typing'
import NavBar from '../NavBar/NavBar'
export default class Banner extends Component {
	render() {
		return (
			<div>
				<div className='banner'>
					<div className='banner-image'>
						<NavBar bgColor='transparent' itemColor='#e2e2e3' />
						<Typing />
					</div>
				</div>
			</div>
		)
	}
}
