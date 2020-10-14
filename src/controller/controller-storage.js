// ----------------------------SEND PHOTO STORAGE SN-IMGPROFILE------------------------------------
export const sendImgToStorage = (file, location) => {
  const storageRef = firebase.storage().ref(`${location}/${file.name}`);
  return storageRef.put(file);
};
