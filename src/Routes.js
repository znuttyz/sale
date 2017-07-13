import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import AddSale from './components/AddSale';

const Routes = () => (
		<Router >
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/home" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/addsale" component={AddSale} />
		</Switch>
		</Router>
);

export default Routes;