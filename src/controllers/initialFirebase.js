// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCPIFVX4ns0ve-9g5z1TiOTGPoqq_-N514',
  authDomain: 'red-social-8bd66.firebaseapp.com',
  databaseURL: 'https://red-social-8bd66.firebaseio.com',
  projectId: 'red-social-8bd66',
  storageBucket: 'red-social-8bd66.appspot.com',
  messagingSenderId: '62530170271',
  appId: '1:62530170271:web:872ae880afe760876e61aa',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const fstore = firebase.firestore();
export { auth, fstore };
