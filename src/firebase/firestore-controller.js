
export const createUser = (idDoc, newUserName, newUserPhoto,namePet, description) => firebase.firestore().collection('users').doc(idDoc).set({
  aboutUs: description,
  displayName: newUserName,
  photoURL: newUserPhoto,
  petName: namePet,
});
export const getUser = docUser => firebase.firestore().collection('users').doc(docUser).get();

export const createPost = (uid, contentText, privacy, imgPost) => firebase.firestore().collection('posts').add({
  userId: uid,
  content: contentText,
  likes: [],
  date: new Date(),
  state: privacy,
  img: imgPost,
});
/* --Profile--*/

export const getProfileInfo = userId => firebase.firestore().collection('users').doc(userId).get();

export const updateProfileInfo = (idDoc,newUserName, namePet, description) => firebase.firestore().collection('users').doc(idDoc).update({
  aboutUs: description,
  displayName: newUserName,
  petName: namePet,
});
