import React from 'react'
import Typical from 'react-typical'
import './Typing.css'
export default class Example extends React.Component {
	render() {
		return (
			<div className='typing-main'>
				<p>
					We Are Transforming{' '}
					<Typical
						steps={[' Learning', 2500, ' Teaching', 2500]}
						loop={Infinity}
						wrapper='span'
					/>
				</p>
			</div>
		)
	}
}
