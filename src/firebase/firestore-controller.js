
export const createUser = (idDoc, newUserName, newUserPhoto, newInfoUser) => firebase.firestore().collection('users').doc(idDoc).set({
  displayName: newUserName,
  infoUser: newInfoUser,
  photoURL: newUserPhoto,
});
