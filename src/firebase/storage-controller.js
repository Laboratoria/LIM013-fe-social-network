// eslint-disable-next-line import/no-cycle
import { storage } from '../main.js';

export const uploadPhotoProfile = (file, uid) => {
  const refStoragePhoto = storage(`imgPhotoProfile/${uid}/${file.name}`);
  return refStoragePhoto.put(file).then(snapshot => snapshot.ref.getDownloadURL());
};
