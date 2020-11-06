export default () => {
  const viewLogin = `
    <h2 class="text-center"> Aislados </h2>
    <figure class="text-center">
      <img class="image" src="./img/imageAislados.png" alt="imagen aislados" width="300px">
    </figure>
    <section class="redes">
    <button class="btn-redes">Google</button>
    <button class="btn-redes">Facebook</button>
    <section>
    <section class="iniciar-sesion">
     <form>
      <input type="text" placeholder="Correo" name="usuario">
      <input type="password" placeholder="Contraseña" name="pass">
      <input type="submit" value="Enviar datos">
      </form>

    <span>
      <p>¿Aun no tienes cuenta? <a href="#/">Registrate</a> </p> 
    </span>
    </section>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogin;

  return divElement;
};
