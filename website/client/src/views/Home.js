import React, { Component } from 'react'
import Banner from '../components/Banner/Banner'
import Timeline from '../components/Timeline/Timeline'
import AboutUs from '../components/AboutUs/AboutUs'
import ContactForm from '../components/ContactForm/ContactForm'
export default class Home extends Component {
	render() {
		return (
			<div>
				<Banner />
				<Timeline />
				<AboutUs />
				<ContactForm />
			</div>
		)
	}
}
