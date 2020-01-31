import React, { Component } from 'react'
import './AboutUs.css'
export default class AboutUs extends Component {
	render() {
		return (
			<div className='container mb-5'>
				<span className='team-heading'>Our Team</span>

				<div className='row'>

					<div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
						<div className='card'>
							<div className='card-image'>
								<img
									src={require('../../resources/himanshu.jpg')}
									alt='Himanshu Garg'
								/>
							</div>

							<ul className='social-icons'>
								<li>
									<a
										href='https://www.linkedin.com/in/garg-himanshu/'
										target='_blank'
										without='true'
										rel='noopener noreferrer'
									>
										<i className='fab fa-linkedin-in'></i>
									</a>
								</li>
								<li>
									<a href='https://github.com/merrcury'>
										<i
											className='fab fa-github'
											target='_blank'
											without='true'
											rel='noopener noreferrer'
										></i>
									</a>
								</li>
								<li>
									<a href='https://twitter.com/_mercurybuddy'>
										<i
											className='fab fa-twitter'
											target='_blank'
											without='true'
											rel='noopener noreferrer'
										></i>
									</a>
								</li>
							</ul>

							<div className='details'>
								<h2>
									Himanshu Garg
									<br />
									<span className='job-title'>ML & AR Expert</span>
								</h2>
							</div>
						</div>
					</div>
					<div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
						<div className='card'>
							<div className='card-image'>
								<img
									src={require('../../resources/pawan.jpg')}
									alt='Pawan Jain '
								/>
							</div>

							<ul className='social-icons'>
								<li>
									<a
										href='https://linkedin.com/in/jainpawan21'
										target='_blank'
										without='true'
										rel='noopener noreferrer'
									>
										<i className='fab fa-linkedin-in'></i>
									</a>
								</li>
								<li>
									<a
										href='https://github.com/jainpawan21'
										target='_blank'
										without='true'
										rel='noopener noreferrer'
									>
										<i className='fab fa-github'></i>
									</a>
								</li>
								<li>
									<a
										href='https://twitter.com/jain_pawan21'
										target='_blank'
										without='true'
										rel='noopener noreferrer'
									>
										<i className='fab fa-twitter'></i>
									</a>
								</li>
							</ul>

							<div className='details'>
								<h2>
									Pawan Jain
									<br />
									<span className='job-title'>Full Stack Developer</span>
								</h2>
							</div>
						</div>
					</div>
					<div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
						<div className='card'>
							<div className='card-image'>
								<img
									src={require('../../resources/rishu.jpeg')}
									alt='Rishu Gupta'
								/>
							</div>

							<ul className='social-icons'>
								<li>
									<a
										href='https://www.linkedin.com/in/rishugupta5/'
										target='_blank'
										without='true'
										rel='noopener noreferrer'
									>
										<i className='fab fa-linkedin-in'></i>
									</a>
								</li>
								<li>
									<a
										href='https://github.com/RISHU-GUPTA'
										target='_blank'
										without='true'
										rel='noopener noreferrer'
									>
										<i className='fab fa-github'></i>
									</a>
								</li>
								<li>
									<a
										href='https://twitter.com/theRishuGupta'
										target='_blank'
										without='true'
										rel='noopener noreferrer'
									>
										<i className='fab fa-twitter'></i>
									</a>
								</li>
							</ul>

							<div className='details'>
								<h2>
									Rishu Gupta
									<br />
									<span className='job-title'>Full Stack Developer</span>
								</h2>
							</div>
						</div>
					</div>
					<div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
						<div className='card'>
							<div className='card-image'>
								<img
									src={require('../../resources/ketan.jpeg')}
									alt='Ketan Patel'
								/>
							</div>

							<ul className='social-icons'>
								<li>
									<a
										href='https://www.linkedin.com/in/ketan-patel-0bb21a166/'
										target='_blank'
										without='true'
										rel='noopener noreferrer'
									>
										<i className='fab fa-linkedin-in'></i>
									</a>
								</li>
								<li>
									<a
										href='https://github.com/ketan9808'
										target='_blank'
										without='true'
										rel='noopener noreferrer'
									>
										<i className='fab fa-github'></i>
									</a>
								</li>
								<li>
									<a
										href='https://twitter.com/ketan9808'
										target='_blank'
										without='true'
										rel='noopener noreferrer'
									>
										<i className='fab fa-twitter'></i>
									</a>
								</li>
							</ul>

							<div className='details'>
								<h2>
									Ketan Patel
									<br />
									<span className='job-title'>Machine Learning Engineer</span>
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
