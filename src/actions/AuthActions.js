import * as firebase from 'firebase';
import {
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER_CHECK,
	LOGOUT_USER,
	LOGOUT_USER_SUCCESS,
} from './types';

export const loginUser = (username, password) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });
		firebase.auth().signInWithEmailAndPassword(username, password)
		.then(function(user) {
			dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
			window.location = "/home";
		})
		.catch(function(error) {
			dispatch({ type: LOGIN_USER_FAIL });
		});
	};
};

export const loginUserCheck = () => {
	return (dispatch) => {
		firebase.auth().onAuthStateChanged(function(user) {
		  	if (user) {
			    // User is signed in.
			    dispatch({ type: LOGIN_USER_CHECK, payload: true })
		  	} else {
			    // User is signed out.
			    dispatch({ type: LOGIN_USER_CHECK, payload: false })
			    window.location = "/login";
			}
		});
	}
}
