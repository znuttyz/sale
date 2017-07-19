import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserCheck, saleCreate } from '../actions';

import { Header } from './element';
import './AddSale.css';

class AddSale extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			type: 'White Cream Face',
			gram: '5',
			piece: '',
		}
	}

	componentWillMount() {
		this.props.loginUserCheck();
	}

	_onHandleChange(event) {
		this.setState({
	    	[event.target.name]: event.target.value
	    });
	}

	_onSubmit(e) {
		e.preventDefault();
		let { name, type, gram, piece } = this.state;
		this.props.saleCreate({ name, type, gram, piece });
	}

	render() {
		return (
			<div style={{marginTop: '61px'}}>
				<Header isBack={true}/>
					<div className="Sale-container">
						<h2 style={{textAlign: 'center'}}>Sale</h2>
						<form onSubmit={(e) => this._onSubmit(e)} id="saleForm">
							<label htmlFor="name" style={{color: 'gray'}}>Buyer Name</label>
							<input type="text" className="Sale-input" name="name" onChange={(event) => this._onHandleChange(event)} value={this.state.name} required/>
							<br/><br/>
							<label htmlFor="type" style={{color: 'gray'}}>Type of Cream</label>
							<select name="type" className="Sale-select" onChange={(event) => this._onHandleChange(event)} value={this.state.type} required>
								<option value="White Cream Face" >White Cream Face</option>
								<option value="Collagen Q10">Collagen Q10</option>=
							</select>
							<br/><br/>
							<label htmlFor="gram" style={{color: 'gray'}}>Gram</label>
							<select name="gram" className="Sale-select" onChange={(event) => this._onHandleChange(event)} value={this.state.gram} required>
								<option value="5" >5 Gram</option>
								<option value="10">10 Gram</option>
							</select>
							<br/><br/>
							<label htmlFor="piece" style={{color: 'gray'}}>Piece</label>
							<input type="number" className="Sale-input" name="piece" style={{width: '30%', display: 'block'}} onChange={(event) => this._onHandleChange(event)} value={this.state.piece} required/>
						</form>
						<br/><br/>
						{
							(this.props.loading) ?
							<div className="loader"></div> 
							: <button className="Sale-button" type="submit" form="saleForm">Submit</button>
						}
					</div>
			</div>
		);
	}
}

const mapStateToProps = ({sale}) => {
	const { loading } = sale;
	return {
		loading
	}
}

export default connect(mapStateToProps, {
	loginUserCheck, saleCreate
})(AddSale);