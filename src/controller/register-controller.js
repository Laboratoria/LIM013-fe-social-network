import { viewRegister  } from "../view/register.js";

const btonLogUp = viewRegister.querySelector('#submit-buttomRegister');
consol.log(btonLogUp);
btonLogUp.addEventListener('click', () => {
  const nameUser = divElemt.querySelector('#nameUser').value;
  const emailLogUp = divElemt.querySelector('#emailSignUp').value;
  const passwordLogUp = divElemt.querySelector('#passwordSignUp').value;
  console.log(nameUser);
  console.log(emailLogUp);
  console.log(passwordLogUp);
    // Authenticate the User
    firebase.auth().createUserWithEmailAndPassword(emailLogUp, passwordLogUp).catch(function (error) {
      console.log("SigUp")
    });