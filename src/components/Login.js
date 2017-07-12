import React, { Component } from 'react';
import { Header, CardSection } from './element';
import './Login.css';

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			loading: false,
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
		this.setState({loading: !this.state.loading})
	}

	render() {
		return (
			<div>
				<Header />
				<CardSection>
					<div className="login-container">
						<label htmlFor="username" style={{color: 'gray'}}>Username</label>
						<input type="text" className="login-input" name="username" onChange={(event) => this._onHandleChange(event)} value={this.state.username}/>
						<br/><br/>
						<label htmlFor="username" style={{color: 'gray', marginTop: 10}}>Password</label>
						<input type="text" className="login-input" name="password"  onChange={(event) => this._onHandleChange(event)} value={this.state.password}/>
						<br/><br/>
						{
							(this.state.loading) ?
							<div className="loader"></div> 
							: <button className="login-button" onClick={() => this._onSubmit()}>Login</button>
						}
					</div>

				</CardSection>
			</div>
		);
	}
}