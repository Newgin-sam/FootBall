import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import { cityDb } from "../temp/m-city-exports";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();

export const matchesCollection = DB.collection('matches');
export const playersCollection = DB.collection('players');
export const positionsCollection = DB.collection('positions');
export const promotionsCollection = DB.collection('promotions');
export const teamsCollection = DB.collection('teams');

// inserting data to the firestore database

// Object.entries(cityDb).map(([key,value]) => {
//   value.map(data => {
//     DB.collection(key).add(data);
//   })
// })

export { firebase };