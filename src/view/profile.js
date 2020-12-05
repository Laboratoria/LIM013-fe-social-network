export default () => {
  const profileView = `
    <section class="profileBodyWrapper">
      <aside class="leftProfile">
        <section class="myProfileResume">
          <section class="heroPhoto">
          </section>
          <table class="userData">
            <tr>
              <td class="userPhoto"></td>
              <td class="userName">LoggedUser</td>
            </tr>
          </table>
          <section class="myPhotos">
            <table>
              <tr>
                <th colspan="2" class="subtitle">Photos &#9660</th>
              </tr>
              <tr class="photoGroup">
                <td class="photoMini">
                </td>
                <td class="photoMini">
                </td>
                <td class="photoMini">
                </td>
              </tr> 
              <tr class="photoGroup">
                <td class="photoMini">
                </td>
                <td class="photoMini">
                </td>
                <td class="photoMini">
                </td>
              </tr> 
            </table>  
          </section>
          <section class="contact">
            <table>
              <tr>
                <th colspan="2" class="subtitle2">Contact &#9660</th>
              </tr>
            </table>
          </section>
          <section class="profileLinksMobile">
            <table>
              <tr>
                <th class="subtitleLeft">Photos &#9660</th>
                <th class="subtitleRight">Contact &#9660</th>
              </tr>
            </table>  
          </section>
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
        <section class="newPostContainer">
          <form class="newPostForm">
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
      </main>
      <aside></aside>
    </section>
    `;
    
    // Insertando el template en la interfaz
    const sectionElement = document.createElement('section');
    //sectionElement.classList.add('position');
    sectionElement.innerHTML = profileView;

    return sectionElement;
}