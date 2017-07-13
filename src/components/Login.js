import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

import { Header, CardSection } from './element';
import './Login.css';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: ""
		}
	}

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	_onSubmit() {
		const { username, password } = this.state;
		this.props.loginUser(username, password); 
	}

	render() {
	console.log(this.props.loading);
		return (
			<div>
				<Header />
				<CardSection>
					<div className="login-container">
						<label htmlFor="username" style={{color: 'gray'}}>Username</label>
						<input type="email" className="login-input" name="username" onChange={(event) => this._onHandleChange(event)} value={this.state.username}/>
						<br/><br/>
						<label htmlFor="password" style={{color: 'gray', marginTop: 10}}>Password</label>
						<input type="password" className="login-input" name="password"  onChange={(event) => this._onHandleChange(event)} value={this.state.password}/>
						<br/><br/>
						<p style={{color: 'red'}}>{this.props.errorLogin}</p>
						{
							(this.props.loading) ?
							<div className="loader"></div> 
							: <button className="login-button" onClick={() => this._onSubmit()}>Login</button>
						}
					</div>

				</CardSection>
			</div>
		);
	}
}

const mapStateToProps = ({auth}) => {
	const { loading, errorLogin } = auth;
	return {
		loading, errorLogin
	};
}

export default connect(mapStateToProps, {loginUser})(Login);