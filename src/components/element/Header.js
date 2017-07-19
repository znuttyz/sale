import React from 'react';
import { Link } from 'react-router-dom';

const style = {
	containerStyle: {
		position: 'fixed',
		top: 0,
		zIndex: 1,
		width: '100%',
		backgroundColor: 'black',
		display: 'flex',
		justifyContent: 'center',
	},
	textStyle: {
		color: 'white',
		padding: '1em',
	},
	buttonIconRightStyle: {
		color: 'white',
		position: 'absolute', 
		right: '0.2em', 
		fontSize: '23px',
		marginTop: '0.5em',
		backgroundColor: 'transparent',
		border: 'none',
		padding: '5px 12px'
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

const Header = ({ isPlus, isBack, isDel, clickDel }) => {
	return(
		<div style={style.containerStyle}>
			{ (isDel) ? <button style={style.buttonIconStyle} onClick={clickDel}><i className="fa fa-minus" aria-hidden="true" style={{color: 'white'}}></i></button> : '' }
		 	{ (isBack) ? <Link to="/home"><button style={style.buttonIconStyle}><i className="fa fa-chevron-left" aria-hidden="true" style={{color: 'white'}}></i></button></Link> : '' }
			<h3 style={style.textStyle}>BEAUTY</h3>
			{ (isPlus) ? <Link to="/addsale"><button style={style.buttonIconRightStyle}><i className="fa fa-plus" aria-hidden="true" style={{color: 'white'}}></i></button></Link> : '' }
			
		</div>
	)
}

export { Header }