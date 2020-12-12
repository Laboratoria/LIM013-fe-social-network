/* eslint-disable no-alert */
import { currentUser } from '../controller/controller-firebase-auth.js';
import { createPost } from '../controller/controller-firebase-fs.js';
/* eslint-disable no-console */

export const homeController = {
  actionPost: (sectionElement) => {
    const postText = sectionElement.querySelector('#newPostText').value;
    const user = currentUser();

    if (postText === '') {
      return;
    }

    createPost(postText, user.email)
      .then(() => {
        const formPost = sectionElement.querySelector('#newPostForm');
        formPost.reset();
      })
      .catch((error) => {
        console.log(error);
        alert('Ócurrio un error intentando crear tu publicacion');
      });
  },
};