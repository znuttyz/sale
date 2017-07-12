import React from 'react';

const style = {
	containerStyle: {
		backgroundColor: 'black',
		display: 'flex',
		justifyContent: 'center'
	},
	textStyle: {
		color: 'white',
		padding: '1em',
	},
	buttonTextStyle: {
		color: 'white',
		position: 'absolute', 
		right: '0.2em', 
		fontSize: '40px',
		marginTop: '0.2em',
		backgroundColor: 'transparent',
		border: 'none',
		padding: '0 15px'
	}
}

const Header = ({ isPlus }) => {
	return(
		<div style={style.containerStyle}>
		 	<button style={{...style.buttonTextStyle, left: '0.2em'}}>{'<'}</button>
			<h3 style={style.textStyle}> Hello Header</h3>
			{ (isPlus) ? <button style={style.buttonTextStyle}>+</button> : '' }
			
		</div>
	)
}

export { Header }