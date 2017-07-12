import React, { Component } from 'react';
import { CardSection, Item } from './element';

export default class Itemlist extends Component {

	_handleItem(id) {
		/* eslint-disable no-restricted-globals */
		if(confirm("Are you sure?")){
			alert(id);
		}
	}

	render() {
		return (
			<div>
				<CardSection>
					<Item 
						id="1234" 
						date="11 July 2017"
						name="Nuttapon Phannurat"
						type="White testest teste"
						gram="20 test"
						piece="100 test"
						price="50000 test"
						color="#F0FFEC"
						click={() => this._handleItem(1234)}
					/>
				</CardSection>
				<CardSection>
					<Item 
						id="1234" 
						date="11 July 2017"
						name="Nuttapon Phannurat"
						type="White testest teste"
						gram="20 test"
						piece="100 test"
						color="#ffeeec"
						price="50000 test"
					/>
				</CardSection>
				<CardSection>
					<Item 
						id="1234" 
						date="11 July 2017"
						name="Nuttapon Phannurat"
						type="White testest teste"
						gram="20 test"
						piece="100 test"
						color="#ffeeec"
						price="50000 test"
					/>
				</CardSection>
			</div>
		);
	}
}