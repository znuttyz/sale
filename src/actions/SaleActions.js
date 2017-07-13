import * as firebase from 'firebase';
import {
	SALE_FETCH,
	SALE_CREATE,
	SALE_CREATE_SUCCESS
} from './types';

export const saleFetch = () => {
	return (dispatch) => {
		let leadsRef = firebase.database().ref('sale');
		leadsRef.on('value', function(snapshot) {
			dispatch({ type: SALE_FETCH, payload: snapshot });
		});
		
	}
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

		firebase.database().ref('price-list/'+type+'/'+gram+'gram')
		.once('value', function(snap) {
		   let price = snap.val().price * piece;
		    firebase.database().ref('sale').push({
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