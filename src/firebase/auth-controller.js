// eslint-disable-next-line max-len
export const signUp = (emailSignUp, passwordSignUp) => firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp);

// Verificación de email
export const verificationEmail = () => firebase.auth().currentUser.sendEmailVerification();
// Usuario loggeado
export const user = () => firebase.auth().currentUser;

// Profile
export const createProfileInfo = (id) => {
    firebase.firestore().collection('users').doc(id).set({
      aboutMe: 'Cuenta un poco sobre ti',
      location: 'Ciudad, País',
    });
  };

