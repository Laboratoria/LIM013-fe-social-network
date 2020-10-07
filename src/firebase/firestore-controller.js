
export const createUser = (idDoc, newUserName, newUserPhoto) => firebase.firestore().collection('users').doc(idDoc).set({
  displayName: newUserName,
  photoURL: newUserPhoto,
  petName: 'Firulais',
  aboutUs: 'Cuenta acerca de tu mascota y tu',
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

export const updateProfileInfo = (userId, namePet, description) => firebase.firestore().collection('users').doc(userId).update({
  petName: namePet,
  aboutUs: description,
});
export const storageRef = firebase.storage().ref();

export const uploadPhotoProfile = (file, uid) => {
  const refStoragePhoto = storageRef.ref(`imgPhotoProfile/${uid}/${file.name}`);
  return refStoragePhoto.put(file).then(snapshot => snapshot.ref.getDownloadURL());
};

