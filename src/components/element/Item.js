import React from 'react';

const style = {
	containerStyle: {
		padding: 15,
		fontSize: 20,
		lineHeight: '1.2em',
	},
	headStyle: {
		display: 'flex',
		justifyContent: 'space-between'
	}
}

const Item = ({id, date, name, type, gram, piece, price, color, click}) => {
	return (
		<div style={{...style.containerStyle, backgroundColor: color}} onClick={click}>
			<div style={style.headStyle}>
				<p>{id}</p>
				<p>{date}</p>
			</div>
			<p>{name}</p>
			<div style={style.headStyle}>
				<p>{type}</p>
				<p>{gram} Gram</p>
			</div>
			<div style={style.headStyle}>
				<p>{piece} ขวด</p>
				<p style={{fontWeight: 'bold'}}>{price} บาท</p>
			</div>
		</div>
	);
};

export { Item };