import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saleFetch, saleUpdate, saleDelete } from '../actions';
import { CardSection, Item } from './element';

class Itemlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			saleList: [],
			mouseTime: null,
		}
	}

	componentWillMount() {
		this.props.saleFetch();
	}

	componentWillReceiveProps(nextProp) {
		// Set sale list
		if(nextProp.saleList) {
			const snapshot = nextProp.saleList;
			let saleList = [];
			snapshot.forEach(function(childSnapshot) {
		      var childData = childSnapshot.val();
		      childData.key = childSnapshot.key;
		      saleList.push(childData);
		    });
		    saleList.reverse();
		    this.setState({ saleList })
		}
	}

	_handleItem(id) {
		/* eslint-disable no-restricted-globals */
		if(confirm("แน่ใจนะว่าจ่ายแล้ว?")){
			this.props.saleUpdate({id});
		}
	}

	_handleDeleteItem(id) {
		if(confirm("แน่ใจนะว่าจะลบ?")){
			this.props.saleDelete({id});
		}
	}

	render() {
		return (
			<div style={{marginTop: '61px'}}>
				{
					this.state.saleList.map((sale) => {
						let color = "";
						let handle;
						// Set item color
						if(sale.status === 0) {
							if(this.props.isDel) {
								color = "#DDCCCA"
								handle = () => this._handleDeleteItem(sale.key);
							}else {
								color = "#ffeeec";
								handle = () => this._handleItem(sale.key);
							}
						} else {
							if(this.props.isDel) {
								color = "#CBD9C8"
								handle = () => this._handleDeleteItem(sale.key);
							}else {
								color = "#F0FFEC";
							}
						} 
						return (
							<CardSection key={sale.id}>
								<Item 
									id={sale.id} 
									date={sale.date}
									name={sale.name}
									type={sale.type}
									gram={sale.gram}
									piece={sale.piece}
									price={sale.price}
									color={color}
									click={handle}
								/>
							</CardSection>
						);
					})
				}
				
				
			</div>
		);
	}
}

const mapStateToProps = ({ sale }) => {
	const { saleList } = sale;
	return {
		saleList
	}
}

export default connect(mapStateToProps, {
	saleFetch, saleUpdate, saleDelete
})(Itemlist);

// <CardSection>
// 					<Item 
// 						id="1234" 
// 						date="11 July 2017"
// 						name="Nuttapon Phannurat"
// 						type="White testest teste"
// 						gram="20 test"
// 						piece="100 test"
// 						color="#ffeeec"
// 						price="50000 test"
// 					/>
// 				</CardSection>
// 				<CardSection>
// 					<Item 
// 						id="1234" 
// 						date="11 July 2017"
// 						name="Nuttapon Phannurat"
// 						type="White testest teste"
// 						gram="20 test"
// 						piece="100 test"
// 						color="#ffeeec"
// 						price="50000 test"
// 					/>
// 				</CardSection>