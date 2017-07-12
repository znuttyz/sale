import React, { Component } from 'react';
import { Header } from './element';
import Itemlist from './Itemlist';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Header isPlus={true}/>
				<Itemlist />
			</div>
		);
	}
}