import React, { Component } from 'react'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './Timeline.css'
import WorkIcon from '@material-ui/icons/Work'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import LockOutlined from '@material-ui/icons/LockOutlined'
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
export default class Timeline extends Component {
	render() {
		return (
			<div className='timeline-main'>
				<div className='timeline-heading'> How To Contribute </div>
				<VerticalTimeline>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						iconStyle={{ background: '#fff', color: 'rgb(33, 150, 243)' }}
						icon={<TouchAppIcon />}
					>
						<h3 className='vertical-timeline-element-title'>Choose Category</h3>
						<p>We have mainly 3 Categories in which you can contribute.</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<AddCircleOutlineIcon />}
					>
						<h3 className='vertical-timeline-element-title'>Choose Model</h3>
						<p>
							In each category we have so many models required. Choose those
							models which are interseting for you.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<LockOutlined />}
					>
						<h3 className='vertical-timeline-element-title'>Lock The Model</h3>

						<p>
							Lock the model for your self so that we are assure that you are
							working on this.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						iconStyle={{ background: '#fff', color: 'rgb(33, 150, 243)' }}
						icon={<WorkIcon />}
					>
						<h3 className='vertical-timeline-element-title'>
							Design And Build
						</h3>
						<p>Now this is design and building time of your choosen model</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<BackupOutlinedIcon />}
					>
						<h3 className='vertical-timeline-element-title'>Submit Model</h3>

						<p>
							Submit your model to us and hold your breath untill we verify your
							submission
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<StarBorderOutlinedIcon />}
					>
						<h3 className='vertical-timeline-element-title'>Hall Of Fame</h3>

						<p>See your name in our hall of fame wall</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						iconStyle={{ background: '#fff', color: 'rgb(33, 150, 243)' }}
						icon={<SentimentSatisfiedOutlinedIcon />}
					>
						<h5 className='vertical-timeline-element-subtitle'>
							Congratulations! you are the reason of someone's smile
						</h5>
					</VerticalTimelineElement>
					{/* <VerticalTimelineElement
						iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
						// icon={<StarIcon />}
					/> */}
				</VerticalTimeline>
			</div>
		)
	}
}
