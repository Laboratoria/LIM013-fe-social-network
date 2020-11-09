export default () => {
  const viewLogin = `
    <section class="container-login">
    <!--<section class="container-figure">-->
      <img class="image" src="./img/imageAislados.png" alt="imagen aislados" >
     <!--</section>-->
    <section class='text'>
       <h2 class="text-center"> Aislados </h2>
    
    <section class="redes">
       <button class="btn-redes"><i class="fab fa-google"></i></button>
       <button class="btn-redes"><i class="fab fa-facebook-f"></i></button>
    </section>
    <p class="text-iniciar-sesion">También puedes ingresar con tu cuenta personal</p>
    
      <form class="form">
        <input class="input" type="text" placeholder="Correo" name="usuario">
        <input class="input"type="password" placeholder="Contraseña" name="pass">
        <button class="login" value="Iniciar Sesion">Iniciar Sesion</button>
      </form>
      <span>
        <p class="iniciar-sesion-text">¿Aun no tienes cuenta? <a href="#/">Registrarse</a></p> 
      </span>
    </section>
    </section>
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogin;

  return divElement;
};
