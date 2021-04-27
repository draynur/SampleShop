import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCLYeXV8t87frxqMqGw3sN7ZkSERmdo-sk",
  authDomain: "one-stop-shop-83f42.firebaseapp.com",
  projectId: "one-stop-shop-83f42",
  storageBucket: "one-stop-shop-83f42.appspot.com",
  messagingSenderId: "628299073776",
  appId: "1:628299073776:web:ee31313e54f49145e1da35",
  measurementId: "G-VV7TM098YS"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}