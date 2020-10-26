<p align="center">
<a title="Travel-In" href= "https://emae1712.github.io/LIM013-fe-social-network/src/" target="_blank"><img  src="https://i.ibb.co/Y2TYb6y/TravelIn.jpg" alt="Travel-In">
  </p>
  
# Travel In ✈️
### Made by C. Goche, E. Arango & M. Pariona
>Social Network project
## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Definición del producto](#2-definición-del-producto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Diseño de Interfaz de Usuario](#4-diseño-de-interfaz-de-usuario)
* [5. Test de usabilidad](#5-Test-de-usabilidad)
* [6. Objetivos de aprendizaje](#6-Objetivos-de-aprendizaje)

<p >
<img align="right" src="https://i.ibb.co/wNH1hVb/ezgif-com-gif-maker.gif" alt="Travel-In">
  </p>
  
## 1. 🧐Resumen del proyecto
El presente proyecto, **_TRAVEL IN_**, es una Red social destinada a personas interesadas en compartir sus experiencias de viajes, tips, recomendaciones y demás que puedan ser de utilidad para otros amantes de los viajes o que quieran iniciar en esta actividad. Esta red social te permitirá crear una cuenta de acceso y loguearse con ella; crear, editar, borrar, comentar y "likear" publicacciones, todo de forma dinámica.



## 2. 👩‍💻Definición del producto
El proyecto se inspiró en las redes sociales actuales, tales como Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Estas redes
sociales han invadido nuestras vidas, las cuales amamos u odiamos, y muchos no podemos vivir sin ellas. 

A raiz de esto, decidimos crear una red social destinada a un objetivo en común, **viajes**. Las redes sociales ya mencionadas, se concentran en captar personas con diferentes intereses. Es por ello, que la red social que hemos realizado se centra en un público usuario que quiera compartir sus experiencias o motivar a otros usuarios a viajar. Hoy en día, diferentes estudios recomiendan viajar, no solo porque es una actividad placentera, sino por los múltiples beneficios tanto para la _salud física_ como para la _salud mental_.

El proyecto se basó en un sistema de cuentas de usuario, siendo lo que las redes sociales actuales utilizan para garantizar la seguridad y la organización en un sistema con muchos usuarios. Ajustándonos a los requerimientos, contamos con las siguientes secciones: 
* **_Sign In_**
* **_Sign Up_**
* **_Recover Password_**
* **_Home_** dónde el usuario podrá crear, editar, comentar eliminar y reaccionar (*Like* o *Let's go!*) publicaciones tanto suyas como de otros usuarios
* **_Profile_** que es el perfil del usuario y dónde verá sus propias publicaciones, sean públicas o privadas y también editarlas, y
* **_Log out_** con el que cerrará sesión. 

## 3. 📝Historias de usuario
Las siguientes historias de usuario se han organizado de acuerdo a órdenes de prioridad, siendo 1 el más importante.

1- Como usuario nuevo debo poder crear una cuenta con email y password válidos para ingresar
a la red social.

2- Como usuario nuevo debo poder iniciar sesión con mi cuenta de Google o Facebook para ingresar a la red social (sin necesidad de crear una cuenta de email válido).

3- Como usuario registrado debo poder iniciar sesión con email y password válidos para ingresar
a la red social.

4- Yo como usuario loggeado debo poder visualizar los datos de mi perfil creado y editarlos para actualizar mi información.

5- Como usuario loggeado debo poder crear, guardar, modificar en el mismo lugar (in place) y eliminar una publicación (post) privada o pública, que puede ser una frase o una imagen.

6- Como usuario loggeado debo poder ver todos los posts públicos y privados que he creado hasta ese momento, desde el más reciente hasta el más antiguo, así como la opción de poder cambiar la configuración de privacidad de mis posts para poder elegir la privacidad de mis publicaciones.

7- Yo como usuario loggeado, puedo dar like y llevar un conteo de likes en las publicaciones para poder indicar que me gusta una publicación.

8- Yo como usuario loggeado debo poder escribir, guardar, editar o eliminar un comentario en una publicación para poder compartir mi opinión o hacer preguntas.

## 4. 🚀Diseño de Interfaz de Usuario
A continuación presentamos un layout (diseño) de la vista mobile y desktop de baja
fidelidad.

* Vista mobile

    ![mobile](https://user-images.githubusercontent.com/32286663/56174616-ec9f6100-5fb8-11e9-9edb-d5ef7c251d9c.png)

* Vista Desktop

    ![desktop](https://user-images.githubusercontent.com/32286663/56174626-fcb74080-5fb8-11e9-8854-26e8d9c4e25f.png)
    
 ## 5. 📈Test de usabilidad
Gracias al Feedback recibido por parte de nuestros usuarios, compañeras y coaches, pudimos iterar varias veces antes de llegar a nuestra versión final. Tomándose en cuenta principalmente:

* En la sección de **Profile**, acomodar las fotos de perfil de usuario y portada como la red social deFacebook, para que los usuarios se sientan familiarizados con nuestra red social.
* Implementar un botón *Scroll up* para que el usuario pueda desplazarse hacia arriba luego de revisar publicaciones de usuarios, tanto en la sección de **Home** como **Profile**.
* Subrayar las pestañas de **Home** y **Profile** para que el usuario sepa la sección en la que se encuentra.
* Colocar una ventana emergente en cada nombre de usuario que haga una publicación, para ver su foto de perfil más grande con algunos de sus datos, con la finalidad de que los usuarios editen su información.
* Paleta de colores que vincule a viajes.
* Diseño interactivo en todas sus presentaciones 

## 6. Objetivos de aprendizaje

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application) que se adapte 
al patrón modelo - vista - controlador [MVC](https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador)
y que sea [_responsive_](https://github.com/Laboratoria/curricula-js/tree/master/topics/css/02-responsive)
 (con más de una vista / página) en la que podamos **leer, escribir, actualizar y
 eliminar datos.**

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] Uso de [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) | [Grid]('https://css-tricks.com/snippets/css/complete-guide-grid/') en CSS.

### DOM y Web APIs

* [ ] [Uso de selectores del DOM.](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings)
* [ ] [Manejo de eventos del DOM](https://lms.laboratoria.la/cohorts/lim-2020-07-bc-core-lim013/courses/browser/02-dom/04-events)
(aprovecha el objeto de evento en sus handlers, uso de event delegacion.)
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)
* [ ] [History API.](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
* [ ] [localStorage.](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

### JavaScript

* [ ] [Uso de template strings](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings)
* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.
* [ ] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y Github

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | code reviews |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### Firebase

* [ ] [Firestore.](https://firebase.google.com/docs/firestore)
* [ ] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules.](https://firebase.google.com/docs/rules)
* [ ] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
 | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

***
