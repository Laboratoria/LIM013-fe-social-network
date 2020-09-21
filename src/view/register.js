export default () => {
  const viewRegister = `
  <div class="register-container">
    <div class="registerForm-container">
      <p>Regístrate</p>
      <div class="msg-alert-reg">
      <input class="input-register validity" id="nameUser" type="text" placeholder="Nombre de usuario"  pattern="([a-zA-ZÁÉÍÓÚñáéíóúÑ]{1,30}\\s*)+">
        <span class="error-msg">Solo letras</span>
      </div>
      <div class="msg-alert-reg">
      <input class="input-register validity" id="emailSignUp" type="email" placeholder="e-mail" pattern="[A-Za-z0-9]+@[a-z]+\\.[a-z]+">
        <span class="error-msg">Ingrese un e-mail valido</span>
      </div>
      <div class="msg-alert-reg">
      <input class="input-register validity" id="passwordSignUp" type="password" placeholder="contraseña" minlength="8" maxlength="15" pattern="[A-Za-z0-9]{6,30}$">
        <span class="error-msg">Tamaño mínimo de 6 caracteres</span>
      </div>
      <input type="submit" id="submit-buttomRegister" value="Crear Cuenta" />
    </div>
    <p>¿Ya tienes una cuenta?.<a href="#/signIn" style="color: blue"class="text-init-session" id="btnViewLogIn"> Inicia sesión</a></p> 
  </div>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewRegister;
  return divElemt;
};
