import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

import Dashboard from 'dashboard/Dashboard/Dashboard';

const Routes = () => {
	return (
		<Router>
			<Route exact path="/">
				<Dashboard/>
			</Route>
			<Route path="/">
				<Redirect to="/"/>
			</Route>
		</Router>
	);
}

export default Routes;
