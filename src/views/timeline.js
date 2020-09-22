export const timelineView = () => {
  const timeline = `
    <!-- PERFIL CON OPCIÓN PARA POSTEAR -->
  <section id="timelineView">
    <section id="profile">
      <img src="img/perfil.png" alt="profile-picture">
      <ul class="profile-data">
        <li class="name"> Fulanita Suarez</li>
        <li class="data"> Profesora de Matemáticas</li>
        <li class="data"> Grado: </li>
        <li class="data"> Cursos: </li>
      </ul>
    </section>

    <section class="post">
      <div class="post-options">
        <label for="privacy-post">Privacidad: </label>
        <select id="privacy-post">
          <option value="public">Público</option>
          <option value="private">Privado</option>
        </select>
        <button type="button" id="edit-post"><img src="" alt="edit-post"></button>      
      </div>

      <div class="text-container">
        <label for="post-text"></label>
        <textarea id="post-text" name="post-text" placeholder="¿Qué quieres compartir?"></textarea>
      </div>

      <div class="post-buttons">
        <button type="button" id="load-img"><img src="" alt="load-img"></button>
        <button id="share-post" class="button-post">Compartir</button>
      </div>
    </section>

    <!-- SECCIÓN CON LOS DEMÁS POSTS -->
    <section id="timeline" class="posted">
      <!-- ocultar íconos de borrar y editar -->
      <div class="post-author">
        <span>Publicado por ABCD EFGH</span>      
      </div>

      <div class="text-container">
        <label for="post-text-posted"></label>
        <textarea class="post-text-posted" name="post-text-posted" readonly></textarea>
      </div>

      <div class="post-buttons">
        <button type="button" id="like-post" class="button-post"><img src="" alt="like"></button>
        <button id="share-post" class="button-post">Comentar</button>
      </div>
    </section>
  </section> `;

  return timeline;
};
