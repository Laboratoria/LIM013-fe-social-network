export default () => {
  const viewInicio = `
    <section class="post">
        <main class="card">
            <div class="card-picture"></div>
            <div class="card-content">
                <div class="card-header">
                    <div class="profile-pic"></div>
                    <div class="detail">
                        <p class="name">Miranda</p>
                        <p class="posted">2 hours ago</p>
                    </div>
                </div>
                <div class="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Exercitationem optio omnis animi alias voluptas
                    unde cum obcaecati, suscipit laboriosam earum.
                </div>
                <div class="tags">
                    <span>#party</span>
                    <span>#colorful</span>
                </div>
                <div class="footer">
                    <div class="like">
                        <i class="fas fa-heart"></i>
                        <span>12k</span>
                    </div>
                    <div class="comment">
                        <i class="fas fa-comment"></i>
                        <span>12k</span>
                    </div>
                    <div class="share">
                        <i class="fas fa-share"></i>
                        <span>12k</span>
                    </div>
                </div>
            </div>
        </main>
        <main class="card">
            <div class="card-picture"></div>
            <div class="card-content">
                <div class="card-header">
                    <div class="profile-pic"></div>
                    <div class="detail">
                        <p class="name">Miranda</p>
                        <p class="posted">2 hours ago</p>
                    </div>
                </div>
                <div class="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Exercitationem optio omnis animi alias voluptas
                    unde cum obcaecati, suscipit laboriosam earum.
                </div>
                <div class="tags">
                    <span>#party</span>
                    <span>#colorful</span>
                </div>
                <div class="footer">
                    <div class="like">
                        <i class="fas fa-heart"></i>
                        <span>12k</span>
                    </div>
                    <div class="comment">
                        <i class="fas fa-comment"></i>
                        <span>12k</span>
                    </div>
                    <div class="share">
                        <i class="fas fa-share"></i>
                        <span>12k</span>
                    </div>
                </div>
            </div>
        </main>
    </section>
    `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewInicio;

  return divElement;
};
