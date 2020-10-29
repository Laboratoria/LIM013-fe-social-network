# Creando una Red Social

## 1. ¿En qué consiste el producto?
Petlandia es una red social de entretenimiento para los amantes de las mascotas , 
en cuál podran compartir a través de fotos o estados los momentos más divertidos junto a ellos. 

## 2. Desarrollo del Producto

### 2.1 Entrevistas de Usuario
Se realizó entrevistas a 5 personas de entre 15 y 30 años para determinar el perfil de 
nuestro usuario y conocer acerca de las expecttivas del desarrollo de un producto como Petlandia.
La entrevista consistió se basó en las sisguientes preguntas
* ¿Puede contarme un poco sobre usted, a qué se dedica y qué hobbies tiene?2.
* ¿Qué redes sociales es usted usuario en los últimos años? ¿Cuál ha sido su favorito?
* ¿Ha conseguido una red social cuyo tema principal ha sido las mascotas?
* ¿Le gustaría dedicar su tiempo de entretenimiento a una red social cuyo tema principal sea las mascotas?
* ¿Qué actividades le gustaría hacer en una red social cuyo tema principal sea las mascotas?
* ¿Hay algo de lo que no hayamos hablado que quisiera comentar?

### 2.2 Hallazgos de las entrevistas

* Las personas más interesadas en usar una red social enfocada en mascotas son de entre 20 y 30 años.
* La red social que más usan son Facebook e Instagram.
* El 80% de ellos desconocía de alguna red social enfocadas en mascotas.
* Como usuarios activos de una red social como Petlandia les gustaría agregar el nombre de sus mascotas a su perfil ,
compartir las fotos de sus mascotas y además hacer meetups con otros amantes de las mascotas. 
* Como usuarios pasivos , les gustaría poder ver las fotos de las mascotas de otros usuario y quizás comentarlas.

### 2.3 Prototipos 

Como producto de las entrevistas , desarrollamos los prototipos de baja y alta fidelidad para vista mobile y desktop.

### Vista mobile

  ![mobile](https://user-images.githubusercontent.com/68167686/97643081-bf889700-1a14-11eb-9156-1aecd1a39ab2.png)

### Vista Desktop

  ![desktop1](https://user-images.githubusercontent.com/68167686/97643080-bef00080-1a14-11eb-9b6d-c24d399d47f6.png)
  ![desktop2](https://user-images.githubusercontent.com/68167686/97643074-bd263d00-1a14-11eb-9fc6-897cf38b7d80.png)

### 2.3 Test de Usabilidad

Resultados del test de usabilidad :

* Mostrar el prototipo de alta fidelidad.
* Modificar la pregunta planteada en el input del post.
* Añadir el botón para eliminar las fotos antes de realizarse las publicaciones.

## 3. Creando la Red Social

### 3.1 Historias de Usuario desarrolladas

* Como usuario nuevo debo poder crear una cuenta con email y password válidos para ingresar
a la red social.

* Como usuario registrado debo poder iniciar sesión con email y password válidos para ingresar
a la red social.

* Como usuario nuevo debo poder iniciar sesión con mi cuenta de Google para ingresar a la red social (sin necesidad de crear una cuenta de email válido).

* Como usuario loggeado debo poder crear, guardar, modificar en el mismo lugar (in place) y eliminar una publicación (post) privada o pública, que puede ser una frase o una imagen.

* Como usuario loggeado debo poder ver todos los posts públicos y privados que he creado hasta ese momento, desde el más reciente hasta el más antiguo, así como la opción de poder cambiar la configuración de privacidad de mis posts para poder elegir la privacidad de mis publicaciones.

* Yo como usuario loggeado, puedo dar like y llevar un conteo de likes en las publicaciones para poder indicar que me gusta una publicación.

* Yo como usuario loggeado debo poder escribir, guardar, editar o eliminar un comentario en una publicación para poder compartir mi opinión o hacer preguntas.

* Yo como usuario loggeado debo poder visualizar los datos de mi perfil creado y editarlos para actualizar mi información.

## 3. Objetivos de aprendizaje

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application) que se adapte 
al patrón modelo - vista - controlador [MVC](https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador)
y que sea [_responsive_](https://github.com/Laboratoria/curricula-js/tree/master/topics/css/02-responsive)
 (con más de una vista / página) en la que podamos **leer, escribir, actualizar y
 eliminar datos.**

### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] Uso de selectores de CSS.
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] Uso de [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) | [Grid]('https://css-tricks.com/snippets/css/complete-guide-grid/') en CSS.

### DOM y Web APIs

* [x] [Uso de selectores del DOM.](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings)
* [x] [Manejo de eventos del DOM](https://lms.laboratoria.la/cohorts/lim-2020-07-bc-core-lim013/courses/browser/02-dom/04-events)
(aprovecha el objeto de evento en sus handlers, uso de event delegacion.)
* [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)
* [ ] [History API.](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
* [ ] [localStorage.](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

### JavaScript

* [x] [Uso de template strings](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings)
* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [x] Manipular arrays (filter | map | sort | reduce)
* [x] Manipular objects (key | value)
* [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [x] Diferenciar entre expression y statements.
* [x] Diferenciar entre tipos de datos atómicos y estructurados.
* [x] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [x] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [x] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [x] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [x] Uso de linter (ESLINT)

### Git y Github

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [x] Colaboración en Github (branches | pull requests | code reviews |tags)
* [x] Organización en Github (projects | issues | labels | milestones)

### Firebase

* [x] [Firestore.](https://firebase.google.com/docs/firestore)
* [x] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules.](https://firebase.google.com/docs/rules)
* [x] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
 | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [x] Planear y ejecutar tests de usabilidad.


