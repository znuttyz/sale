import {
	SALE_FETCH,
	SALE_CREATE,
	SALE_CREATE_SUCCESS,
	SALE_UPDATE,
	SALE_DELETE
} from '../actions/types';

const INITIAL_STATE = { 
	saleList: null,
	loading: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SALE_FETCH:
			return { ...state, saleList: action.payload }
		case SALE_CREATE: 
			return { ...state, loading: true }
		case SALE_CREATE_SUCCESS:
		case SALE_UPDATE:
		case SALE_DELETE:
			return { ...state, ...INITIAL_STATE }
		default:
			return state;
	}
}