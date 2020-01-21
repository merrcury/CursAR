import React, { Component } from 'react'
import {
	Navbar,
	Nav,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	NavItem,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
	state = {
		isNavOpen: false,
	}

	toggleNav = () => {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		})
	}
	render() {
		return (
			<React.Fragment>
				<Navbar
					className='navbar-light'
					sticky={'top'}
					style={{ backgroundColor: this.props.bgColor, borderRadius: '5px' }}
					expand='sm'
				>
					<div className='container'>
						<NavbarBrand className='mr-auto' href='/'>
							{/* <span style={{ color: '#2196F3' }}>CursAR</span> */}
							<img
								src={require('../../resources/bdi-logo.png')}
								height='40'
								width='55'
								alt='logo'
							/>
						</NavbarBrand>
						<NavbarToggler
							onClick={this.toggleNav}
							className='ml-auto'
							style={{ outline: 'none' }}
						/>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav className='ml-auto' navbar>
								<NavItem className='ml-auto mr-auto'>
									<NavLink
										className='nav-link'
										to='/'
										style={{ color: this.props.itemColor }}
									>
										Home
									</NavLink>
								</NavItem>
								<NavItem className='ml-auto mr-auto'>
									<NavLink
										className='nav-link'
										to='/categories'
										style={{ color: this.props.itemColor }}
									>
										Categories
									</NavLink>
								</NavItem>
								<NavItem className='ml-auto mr-auto'>
									<NavLink
										className='nav-link'
										to='/submit'
										style={{ color: this.props.itemColor }}
									>
										Submit
									</NavLink>
								</NavItem>
								<NavItem className='ml-auto mr-auto'>
									<NavLink
										className='nav-link'
										to='/fame'
										style={{ color: this.props.itemColor }}
									>
										Hall Of Fame
									</NavLink>
								</NavItem>
								<NavItem className='ml-auto mr-auto'>
									<a
										className='nav-link'
										href='http://bit.ly/cursARapp'
										target='_blank'
										style={{ color: this.props.itemColor }}
									>
										App
									</a>
								</NavItem>
								{localStorage.getItem('uid') === null ? (
									<NavItem className='ml-auto mr-auto'>
										<NavLink
											className='nav-link'
											to='/signin'
											style={{ color: this.props.itemColor }}
										>
											Signin
										</NavLink>
									</NavItem>
								) : (
									<NavItem className='ml-auto mr-auto'>
										<NavLink
											className='nav-link'
											to='/signin'
											onClick={() => {
												console.log(localStorage.getItem('uid'))
												window.location.pathname = '/signin'
												localStorage.clear()
											}}
											style={{ color: this.props.itemColor, cursor: 'pointer' }}
										>
											SignOut
										</NavLink>
									</NavItem>
								)}
							</Nav>
							{/* <Nav className='ml-auto' navbar>
                           <NavItem>
                               <Button outline onClick={this.toggleModal}>
                                  <span className="fa fa-sign-in fa-lg"></span> Login
                               </Button>
                           </NavItem>
                       </Nav> */}
						</Collapse>
					</div>
				</Navbar>
				<hr style={{ position: 'relative', marginTop: '0' }} />
			</React.Fragment>
		)
	}
}
export default Header
