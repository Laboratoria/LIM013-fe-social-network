export const loginPrincipal=()=>{
	
	const viewLogin =` 
	<section id="view-login-desktop">
		<div class="imagen-login item-login">
 		 <img id="img-colegio" src="/img/imagen-login.png">
		</div> 
		<div class="formulario-login item-login">
 			<div class="saludo">
   			<h1>¡Bienvenido a InnovaSocial!</h1>
    		<p>En este lugar podras comunicarte y compartir recursos</p>
			</div>
			<div class="imagen-celular"> 
				<img id="img-celular" src="/img/fondo-celular.png">
			</div>
			<div id="formulario-principal">
				<form >
					<i class="fas fa-envelope-square"></i>
					<input type="text" id="correo" name="correo" placeholder="Correo Electrónico" class="input-form"/><br>
					<i class="fas fa-lock"></i>
					<input type="text" id="clave" name="clave" placeholder="Contraseña"class="input-form"/><br>
					<button id="btn-ingresar">INGRESAR</button>
					<p>O ingresa con</p>
					<button id="btn-fb" class="redes"><i class="fab fa-facebook-f"></i></button>
					<button id="btn-gmail" class="redes"><i class="fab fa-google"></i></button>
					<p>¿Todavia no eres miembro?</p>
					<a id="nueva-cuenta" href="#">Únete Ahora</a>
				</form>
			</div>
		</div>
	</section>`
	const div= document.createElement('div')
	div.innerHTML=viewLogin;
	return div;
}