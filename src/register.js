export const registerView = () => {
  const registerTmplt = `
  <section id="section-register">
    <div>
      LOGO
    </div>
    <form> <!-- action="/action_page.php" -->
      <ul class="form-flex">
        <li>
          <label for="form-name"></label>
          <input type="text" id="form-name" name="form-name" placeholder="Escribe tu nombre">
        </li>
        <li>
          <label for="form-lastname"></label>
          <input type="text" id="form-lastname" name="form-lastname" placeholder="Escribe tus apellidos">
        </li>
        <li>
          <label for="form-grade"></label>
          <input type="text" id="form-grade" name="form-grade" placeholder="Indica en qué grado estás">   
        </li>
        <li>
          <label for="form-email"></label>
          <input type="text" id="form-email" name="form-email" placeholder="Escribe tu correo"> 
        </li>
        <li>
          <label for="form-pass"></label>
          <input type="text" id="form-pass" name="form-pass" placeholder="Escribe una contraseña segura">
        </li>
        <li>
          <label for="form-pass-check"></label>
          <input type="text" id="form-pass-check" name="form-pass-check" placeholder="Vuelve a escribir la contraseña">
        </li>
        <li>
          <input type="submit" id="form-register" class="button-post" value="Registrarte">
        </li>  
      </ul> 
    </form>
</section> `;
  return registerTmplt;
};
