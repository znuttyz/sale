import React, { Component } from 'react';
import { Header } from './element';
import './AddSale.css';

export default class AddSale extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			type: '',
			gram: '',
			piece: '',
			loading: false
		}
	}

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	_onSubmit() {
		this.setState({loading: !this.state.loading});
	}

	render() {
		console.log(this.state.type, this.state.piece)
		return (
			<div>
				<Header isBack={true}/>
					<div className="Sale-container">
						<h2 style={{textAlign: 'center'}}>Sale</h2>
						<label htmlFor="name" style={{color: 'gray'}}>Name</label>
						<input type="text" className="Sale-input" name="name" onChange={(event) => this._onHandleChange(event)} value={this.state.name}/>
						<br/><br/>
						<label htmlFor="type" style={{color: 'gray'}}>Type</label>
						<select name="type" className="Sale-select" onChange={(event) => this._onHandleChange(event)} value={this.state.type}>
							<option value="volvo">Volvooooo</option>
							<option value="saab">Saab asdf df</option>
							<option value="opel">Op sdafasdf el</option>
							<option value="audi">Audi</option>
						</select>
						<br/><br/>
						<label htmlFor="gram" style={{color: 'gray'}}>Gram</label>
						<select name="gram" className="Sale-select" onChange={(event) => this._onHandleChange(event)} value={this.state.gram}>
							<option value="volvo">Volvooooo</option>
							<option value="saab">Saab asdf df</option>
							<option value="opel">Op sdafasdf el</option>
							<option value="audi">Audi</option>
						</select>
						<br/><br/>
						<label htmlFor="piece" style={{color: 'gray'}}>Piece</label>
						<input type="text" className="Sale-input" name="piece" style={{width: '30%', display: 'block'}} onChange={(event) => this._onHandleChange(event)} value={this.state.piece}/>
						<br/><br/>
						{
							(this.state.loading) ?
							<div className="loader"></div> 
							: <button className="Sale-button" onClick={() => this._onSubmit()}>Submit</button>
						}
					</div>
			</div>
		);
	}
}