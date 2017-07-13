import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SaleReducer from './SaleReducer';

export default combineReducers({
	auth: AuthReducer,
	sale: SaleReducer
});