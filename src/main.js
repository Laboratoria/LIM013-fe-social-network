import { cambioVista } from './controller/router.js';

const init = () => {
  cambioVista(window.location.hash);
  window.addEventListener('hashchange', () => cambioVista(window.location.hash));
};
window.addEventListener('load', init);
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBzHWIsaXuMT1H8-1DrI-WSGyDZqMTgH28',
  authDomain: 'petlandia-624cd.firebaseapp.com',
  databaseURL: 'https://petlandia-624cd.firebaseio.com',
  projectId: 'petlandia-624cd',
  storageBucket: 'petlandia-624cd.appspot.com',
  messagingSenderId: '81569020681',
  appId: '1:81569020681:web:8ffd76dcddc2d0b5bb31d8',
  measurementId: 'G-C0GXG85CE3',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Se asigna a una variable cada elemento input con su ID
const password = document.getElementById('password');
const correo = document.getElementById('email');
const enviarData = document.getElementById('submit_button');
// Se conecta con la base de datos de Firebase
const dataDB = firebase.database().ref('Datos').push();
// Le agregamos un evento click al botón de enviar enviarData.addEventListener('click', enviar);
function enviar() {
  // Se envía los valores de cada input
  dataDB.set({
    password: password.value,
    correo: correo.value,
  });
}
enviarData.addEventListener('click', enviar);
