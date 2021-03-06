import * as firebase from 'firebase';
import {
	SALE_FETCH,
	SALE_FETCH_SUCCESS,
	SALE_CREATE,
	SALE_CREATE_SUCCESS,
	SALE_UPDATE,
	SALE_DELETE
} from './types';

export const saleFetch = () => {
	return (dispatch) => {
		dispatch({ type: SALE_FETCH });
		saleFetching(dispatch);
	}
}

const saleFetching = (dispatch) => {
	let saleRef = firebase.database().ref('sale');
	saleRef.on('value', function(snapshot) {
		dispatch({ type: SALE_FETCH_SUCCESS, payload: snapshot });
	});
}

export const saleCreate = ({name, type, gram, piece}) => {
	return (dispatch) => {
		dispatch({ type: SALE_CREATE });
		const date = new Date();
		const monthNames = [
		    "January", "February", "March",
		    "April", "May", "June", "July",
		    "August", "September", "October",
		    "November", "December"
		];
		const day = date.getDate();
		const monthIndex = date.getMonth();
		const year = date.getFullYear();
		const today = day + ' ' + monthNames[monthIndex] + ' ' + year;

		firebase.database().ref('sale').limitToLast(1)
		.once('value', function(snap) {
			let id = Object.values(snap.val())[0].id;

			firebase.database().ref('price-list/'+type+'/'+gram+'gram')
			.once('value', function(snap2) {
			    let price = snap2.val().price * piece;

			    firebase.database().ref('sale').push({
			    	id: ++id,
					name,
					type,
					gram,
					piece,
					price,
					status: 0,
					date: today
				}).then(() => {
					dispatch({ type: SALE_CREATE_SUCCESS });
					window.location = "/";
				});

			});

		});

		

		
	}
}

export const saleUpdate = ({id}) => {
	return (dispatch) => {
		let updates = {};
  		updates['sale/' + id + '/status'] = 1;
  		firebase.database().ref().update(updates);
  		dispatch({ type: SALE_UPDATE });
  		saleFetching(dispatch);
	}
}

export const saleDelete = ({id}) => {
	return (dispatch) => {
		firebase.database().ref('sale/' + id).remove();
		dispatch({ type: SALE_DELETE });
  		saleFetching(dispatch);
	}
}
// firebase.database().ref('sale').push({
// 		  author: "Nuttapon",
// 		  title: "Testtest"
// 		});

// const date = new Date();
// 		const monthNames = [
// 		    "January", "February", "March",
// 		    "April", "May", "June", "July",
// 		    "August", "September", "October",
// 		    "November", "December"
// 		];
// 		const day = date.getDate();
// 		const monthIndex = date.getMonth();
// 		const year = date.getFullYear();
// 		const today = day + ' ' + monthNames[monthIndex] + ' ' + year;

// 		firebase.database().ref('sale').push({
// 		  name: "Nuttapon2",
// 		  type: "Col10",
// 		  gram: 10,
// 		  piece: 100,
// 		  status: 0,
// 		  date: today
// 		});