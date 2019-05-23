import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyAeXQo88cxKE1RP22a1gB14LeGqpFjJ5No",
  authDomain: "devicefarmclusters.firebaseapp.com",
  databaseURL: "https://devicefarmclusters.firebaseio.com",
  projectId: "devicefarmclusters",
  storageBucket: "devicefarmclusters.appspot.com",
  messagingSenderId: "96778433154",
  appId: "1:96778433154:web:028512ee9f1a7554"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.database()

export default db
