// TODO updload photoProfile
export const uploadPhotoProfile = (file, uid) => {
  const storage = firebase.storage();
  const refStoragePhoto = storage.ref(`imgPhotoProfile/${uid}/${file.name}`);
  return refStoragePhoto.put(file).then(snapshot => snapshot.ref.getDownloadURL());
};
// TODO updload img
export const uploadImgPosting = (file, uid) => {
  const storage = firebase.storage();
  const refStorageFirebase = storage.ref(`imagePost/${uid}/${file.name}`);
  refStorageFirebase.put(file).then(snapshot => snapshot.ref.getDownloadURL());
};
