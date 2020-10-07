// eslint-disable-next-line import/no-cycle
import { storagefuncion } from '../main.js';

export const uploadImgPosting = (file, uid) => {
  const refStorageFirebase = storagefuncion.ref(`imagePost/${uid}/${file.name}`);
  refStorageFirebase.put(file);
};
