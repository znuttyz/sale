import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saleFetch } from '../actions';
import { CardSection, Item } from './element';

class Itemlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			saleList: []
		}
	}

	componentWillMount() {
		this.props.saleFetch();
	}

	componentWillReceiveProps(nextProp) {
		// Set sale list
		const snapshot = nextProp.saleList;
		let saleList = [];
		snapshot.forEach(function(childSnapshot) {
	      var childData = childSnapshot.val();
	      childData.id = childSnapshot.key;
	      saleList.push(childData);
	    });
	    this.setState({ saleList })
	}

	_handleItem(id) {
		/* eslint-disable no-restricted-globals */
		if(confirm("Are you sure?")){
			alert(id);
		}
	}

	render() {
		return (
			<div>
				{
					this.state.saleList.map((sale) => {
						let color = "";
						if(sale.status === 0) color = "#ffeeec";
						else color = "#F0FFEC"
						return (
							<CardSection key={sale.id}>
								<Item 
									id="" 
									date={sale.date}
									name={sale.name}
									type={sale.type}
									gram={sale.gram}
									piece={sale.piece}
									price={sale.price}
									color={color}
									click={() => this._handleItem(sale.id)}
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

export default connect(mapStateToProps, {saleFetch})(Itemlist);

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