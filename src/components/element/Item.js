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
				<p>#{id}</p>
				<p>{date}</p>
			</div>
			<p>Nuttapon Phannurat</p>
			<div style={style.headStyle}>
				<p>White testest teste</p>
				<p>20 test</p>
			</div>
			<div style={style.headStyle}>
				<p>100 test</p>
				<p>50000 test</p>
			</div>
		</div>
	);
};

export { Item };