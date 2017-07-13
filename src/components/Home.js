import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserCheck } from '../actions';

import { Header } from './element';
import Itemlist from './Itemlist';

class Home extends Component {
	componentWillMount() {
		this.props.loginUserCheck();
	}

	render() {
		return (
			<div>
				<Header isPlus={true} />
				<Itemlist />
			</div>
		);
	}
}

export default connect(null, {loginUserCheck})(Home)