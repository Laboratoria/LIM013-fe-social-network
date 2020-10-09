/* --modularizar-- */

import { currentUser } from '../firebase/auth-controller';

export const postSection = (doc) => {
  const eachPost = document.createElement('div');
  eachPost.classList.add('container-post');
  const user = currentUser().uid;
  eachPost.innerHTML = `
    
<div class="user_post">
    <div class="user_photo">
      <img class="user_img" src="${doc.data().photo}" alt="">
      <p class="post-time">${doc.data().time}</p>
    </div>
    <div>
      <h4>${doc.data().name}</h4>
          <textarea class="validity input-post" name="" id="inputPost ${user.id}" type="text" cols="30" rows="10">${doc.data().post}</textarea>
        <img src="${doc.data().img}" style="width:100%" alt="Northern Lights" class="photo_post_img">
    </div>
    <hr class="w3-clear">
    <div class='button-section'>
      <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fas fa-heart"></i> Like</button> 
      <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button>
    </div>
    <hr class="w3-clear">
</div>`;

  return eachPost;
};
