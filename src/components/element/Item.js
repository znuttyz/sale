import React from 'react';
import './Item.css';

const Item = ({id, date, name, type, gram, piece, price, color, click}) => {
	return (
		<div className="item-container active" style={{backgroundColor: color}} onClick={click}>
			<div className="item-headStyle">
				<p>#{id}</p>
				<p>{date}</p>
			</div>
			<p className="bold">{name}</p>
			<div className="item-headStyle">
				<p>{type}</p>
				<p>{gram} กรัม</p>
			</div>
			<div className="item-headStyle">
				<p>{piece} ขวด</p>
				<p className="bold">{price} บาท</p>
			</div>
		</div>
	);
};

export { Item };