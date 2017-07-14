import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserCheck } from '../actions';

import { Header } from './element';
import Itemlist from './Itemlist';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			isDelete: false
		}
	}

	componentWillMount() {
		this.props.loginUserCheck();
	}

	render() {
		return (
			<div>
				<Header isPlus={true} isDel={true} clickDel={() => this.setState({isDelete: !this.state.isDelete})}/>
				<Itemlist isDel={this.state.isDelete}/>
			</div>
		);
	}
}

export default connect(null, {loginUserCheck})(Home)