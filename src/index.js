import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDVG2ilB7aXA4rZgyNvezfrtfJLEX4nuX4",
    authDomain: "sale-6dc5f.firebaseapp.com",
    databaseURL: "https://sale-6dc5f.firebaseio.com",
    projectId: "sale-6dc5f",
    storageBucket: "sale-6dc5f.appspot.com",
    messagingSenderId: "581547266689"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
