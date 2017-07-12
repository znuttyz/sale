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
	},
	buttonIconStyle: {
		color: 'white',
		position: 'absolute', 
		left: '0.2em', 
		fontSize: '23px',
		marginTop: '0.5em',
		backgroundColor: 'transparent',
		border: 'none',
		padding: '5px 12px'
	},
}

const Header = ({ isPlus, isBack }) => {
	return(
		<div style={style.containerStyle}>
		 	{ (isBack) ? <button style={style.buttonIconStyle}><i className="fa fa-chevron-left" aria-hidden="true" style={{color: 'white'}}></i></button> : '' }
			<h3 style={style.textStyle}> Hello Header</h3>
			{ (isPlus) ? <button style={style.buttonTextStyle}>+</button> : '' }
			
		</div>
	)
}

export { Header }