// Profile
export const createUser = (idDoc, newUserName, newUserPhoto, newInfoUser) => firebase.firestore().collection('USERS').doc(idDoc).set({
  displayName: newUserName,
  infoUser: newInfoUser,
  photoURL: newUserPhoto,
});

/* export const getAllPosts = callback => firebase.firestore().collection('posts')
  .orderBy('time', 'desc')
  .onSnapshot((querySnapshot) => {
    const allPosts = [];
    querySnapshot.forEach((doc) => {
      allPosts.push({ id: doc.id, ...doc.data() });
    });
    callback(allPosts);
  }); */
