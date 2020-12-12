/* eslint-disable no-plusplus */
import { homeController } from '../view-controler/home-controller.js';
/* eslint-disable no-console */
/* eslint-disable no-undef */

export default () => {
  const homeView = `
    <section class="homeBodyWrapper">
      <aside class="leftHome">
        <section class="myProfileTab">
          <table class="linkTab">
            <tr>
              <td class="iconLeft">
                <i class="fas fa-user-circle"></i>
              </td>
              <td class="rightText">
                <p>LoggedUser</p>
              </td>
            </tr>
            <tr>
              <td class="iconLeft">
                <i class="fas fa-user-friends"></i>
              </td>
              <td class="rightText">
                <p>Friends</p>
              </td>
            </tr>
            <tr>
              <td class="iconLeft">
                <i class="fas fa-users"></i>
              </td>
              <td class="rightText">
                <p>Groups</p>
              </td>
            </tr>
            <tr>
              <td class="iconLeft">
                <i class="fas fa-video"></i>
              </td>
              <td class="rightText">
                <p>Videos</p>
              </td>
            </tr>
            <tr>
              <td class="iconLeft">
                <i class="fas fa-calendar-day"></i>
              </td>
              <td class="rightText">
                <p>Events</p>
              </td>
            </tr>
            <tr>
              <td class="iconLeft">
                <i class="fas fa-history"></i>
              </td>
              <td class="rightText">
                <p>History</p>
              </td>
            </tr>          
            <tr>
              <th colspan="2" class="subtitle">My Accounts</th>
            </tr>
            <tr>
              <td class="iconLeft">
                <i class="fas fa-user-circle"></i>
              </td>
              <td class="rightText">
                <p>MySecondaryAccount</p>
              </td>
            </tr>
            <tr>
              <td class="iconLeftLast">
                <i class="fas fa-user-circle"></i>
              </td>
              <td class="rightTextLast">
                <p>MyTradingAccount</p>
              </td>
            </tr>
          </table>
          <table class="iconLinkTab">
            <tr>
              <td class="iconMobile">
                <i class="fas fa-user-circle"></i>
              </td>
              <td class="iconMobile">
                <i class="fas fa-user-friends"></i>
              </td>
              <td class="iconMobile">
                <i class="fas fa-users"></i>
              </td>
              <td class="iconMobile">
                <i class="fas fa-video"></i>
              </td>
              <td class="iconMobile">
                <i class="fas fa-calendar-day"></i>
              </td>
              <td class="iconMobile">
                <i class="fas fa-history"></i>
              </td>
            </tr>
          </table>
          <section class="bottom">
            <hr class="sepUserData">
            <p class="footerSideText">
              @<span class="footerBold">COS</span>play |
              <span class="footerBold">Developed by</span>: Team 4 | Social Network | Laboratoria | 2020
            </p>
          </section>
        </section>
      </aside>
      <main class="mainHome">
        <section class="newPostContainer" id="newPostContainer">
          <form class="newPostForm" id="newPostForm">
            <section class="form-groupPost">
              <input type="text" placeholder="What have you been up to lately?" id="newPostText" name="newPostText" class="newPostInputText" ><br>
              <hr class="separator">
            </section>
            <section class="form-groupPost">
              <section class="callToAction">
                <button type="button" class="postButton" id="postButton">POST</button>
              </section>
            </section>
          </form>
        </section>
        <ul class="postList" id="postList"></ul>
      </main>
      <aside></aside>
    </section>
  `;
  // Insertando el template en la interfaz
  const sectionElement = document.createElement('section');
  //sectionElement.classList.add('position');
  sectionElement.innerHTML = homeView;

  // Accion del boton POST (newPost)
  const postBtn = sectionElement.querySelector('#postButton');
  postBtn.addEventListener('click', () => {
    homeController.actionPost(sectionElement);
  });

  // Pintando post en el home
  const ulElement = sectionElement.querySelector('#postList');
  const printPost = (dataPost) => {
    const liTemplate = `
      <section class="postContainer">
        <form class="postForm" id="postForm">
          <section class="form-groupPost">
            <table class="topUserData">
              <tr class="topUDContainer">
                <td class="iconLeftPost">
                </td>
                <td class="rightTextPost">
                  <p class="loggedUsr">${dataPost.loggedUser}<br>
                  <span class="postDate">${dataPost.date}</span></p>
                </td>
                <td class="deletePost">
                  <button type="button" class="deletePostButton" id="deletePostButton"><i class="far fa-window-close"></i></button>
                </td>
              </tr>
            </table>
            <hr class="separator">
          <section class="form-groupPost">
            <p class="postInputTextContent">${dataPost.postTextContent}</p>
            <hr class="separator">
          </section>
          <section class="form-groupPost">
            <section class="otherUsersReaction">
              <button type="button" class="likeButton" id="likeButton"></button>
              <button type="button" class="shareButton" id="shareButton"></button>
            </section>
          </section>
        </form>
      </section>     
    `;

    // Insertando el template en la interfaz
    const liElement = document.createElement('li');

    liElement.innerHTML = liTemplate;
    ulElement.appendChild(liElement);
  };

  const printPostList = (userPosts) => {
    ulElement.innerHTML = '';
    userPosts.forEach((post) => {
      printPost(post);
    });
  };

  // listado
  const fs = firebase.firestore();
  fs.collection('userPosts').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc.data());
    });
    printPostList(posts);
  });
  
  return sectionElement;
};
