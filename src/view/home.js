export default () => {
  const homeView = `
    <header></header>
    <main class="mainHome">
      <section class="newPostContainer">
        <section class="postFeed">
          <section class="newPost">
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
        </section>
      </section>
    </main>
    <aside></aside>
  `;
  // Insertando el template en la interfaz
  const sectionElement = document.createElement('section');
  //sectionElement.classList.add('position');
  sectionElement.innerHTML = homeView;
  
  return sectionElement;
};
