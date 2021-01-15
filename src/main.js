import { changeView } from './controller/route.js';
import { checkSesionActive } from './controller/controller-route.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAfoSuHjPJrO24TYzP35q38X4uYIJ_cANM',
  authDomain: 'sn-laboratoria.firebaseapp.com',
  databaseURL: 'https://sn-laboratoria.firebaseio.com',
  projectId: 'sn-laboratoria',
  storageBucket: 'sn-laboratoria.appspot.com',
  messagingSenderId: '308360863060',
  appId: '1:308360863060:web:d276699e944f85972dfcc1',
  measurementId: 'G-KRTZTJSLC8',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const init = () => {
  checkSesionActive(changeView);
};
window.addEventListener('load', init);
window.addEventListener('hashchange', init);
