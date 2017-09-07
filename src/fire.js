import firebase from 'firebase'
import * as firebaseKey from './firebaseKey'

const config = {
  apiKey: firebaseKey.apiKey,
  authDomain: firebaseKey.authDomain,
  databaseURL: firebaseKey.databaseURL,
  projectId: firebaseKey.projectId,
  storageBucket: firebaseKey.storageBucket,
  messagingSenderId: firebaseKey.messagingSenderId
};
const fire = firebase.initializeApp(config);
export default fire;
