
export const createUser = (idDoc, newUserName, newInfoUser) => firebase.firestore().collection('USERS').doc(idDoc).set({
  displayName: newUserName,
  infoUser: newInfoUser,
});
