import React from 'react'
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './views/Home'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'
import ForgotPass from './views/ForgotPass'
import Categories from './views/Categories'
import Fame from './views/Fame'
import Submit from './views/Submit'
// import AddModel from './views/Admin/AddModel'
// import AllUser from './views/Admin/AllUser'
// import AllFeedback from './views/Admin/AllFeedback'
// import AdminSignIn from './views/Admin/SignIn'
// import AcceptModel from './views/Admin/AcceptModel'
import ErrorPage from './views/ErrorPage'
function App() {
	function check() {
		if (localStorage.getItem('isAdmin') === 'yes') {
			return true
		}
		return false
	}
	return (
		<div>
			<>
				<Switch>
					<Route exact path='/' render={props => <Home {...props} />} />
					<Route
						path='/signin'
						exact
						render={props => (
							<div>
								<SignIn {...props} />
							</div>
						)}
					/>
					<Route
						path='/signup'
						exact
						render={props => (
							<div>
								<SignUp {...props} />
							</div>
						)}
					/>
					<Route
						path='/forgotpass'
						exact
						render={props => (
							<div>
								<ForgotPass {...props} />
							</div>
						)}
					/>
					<Route
						path='/categories'
						exact
						render={props => (
							<div>
								<Categories {...props} />
							</div>
						)}
					/>
					<Route
						path='/fame'
						exact
						render={props => (
							<div>
								<Fame {...props} />
							</div>
						)}
					/>
					<Route
						path='/submit'
						exact
						render={props => (
							<div>
								<Submit {...props} />
							</div>
						)}
					/>
					{/* <Route
						path='/admin/signin'
						exact
						render={props =>
							check() ? (
								<Redirect to='/admin/allUser' />
							) : (
								<div>
									<AdminSignIn {...props} />
								</div>
							)
						}
					/>
					<Route
						path='/admin/addModel'
						exact
						render={props =>
							check() ? (
								<div>
									<AddModel {...props} />
								</div>
							) : (
								<Redirect to='/admin/signin' />
							)
						}
					/>
					<Route
						path='/admin/allUser'
						exact
						render={props =>
							check() ? (
								<div>
									<AllUser {...props} />
								</div>
							) : (
								<Redirect to='/admin/signin' />
							)
						}
					/>
					<Route
						path='/admin/acceptModel'
						exact
						render={props =>
							check() ? (
								<div>
									<AcceptModel {...props} />
								</div>
							) : (
								<Redirect to='/admin/signin' />
							)
						}
					/>
					<Route
						path='/admin/allFeedback'
						exact
						render={props =>
							check() ? (
								<div>
									<AllFeedback {...props} />
								</div>
							) : (
								<Redirect to='/admin/signin' />
							)
						}
					/> */}
					<Route
						path='*'
						render={props => (
							<div>
								
								<ErrorPage {...props} />
							</div>
						)}
					/>
				</Switch>
			</>
		</div>
	)
}

export default App
