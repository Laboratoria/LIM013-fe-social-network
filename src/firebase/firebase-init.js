// --- Inicializando Firebase
export const firebaseInit = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyCz1PH_Wexpp5PPjrdCJQ7mBSLPgvUUy9A',
    authDomain: 'cosplay-b3cab.firebaseapp.com',
    databaseURL: 'https://cosplay-b3cab.firebaseio.com',
    projectId: 'cosplay-b3cab',
    storageBucket: 'cosplay-b3cab.appspot.com',
    messagingSenderId: '263852565116',
    appId: '1:263852565116:web:a74334e52169948c555ff9',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};
