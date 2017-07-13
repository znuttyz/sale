import {
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER_CHECK,
	// LOGOUT_USER,
	// LOGOUT_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = { 
	email: '', 
	password: '', 
	user: null,
	errorLogin: '',
	isLogin: false,
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return { ...state, loading: true }
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload };
		case LOGIN_USER_FAIL:
			return { ...state, errorLogin: 'Authentication Failed.', password: '', loading: false };
		case LOGIN_USER_CHECK:
			return { ...state, isLogin: action.payload };
		// case LOGOUT_USER_SUCCESS:
		// 	return { ...state, ...INITIAL_STATE };
		default:
			return state;
	}
}