
# BIENVENID@S A PETLANDIA :cat: :orange_heart: :dog: 
## Team : Verónica Flores ft Elizabeth Rivera 
___
## Índice
* [1. ¿En qué consiste Petlandia ?](#1-¿-En-qué-consiste-Petlandia-?)
* [2. Desarrollo del Producto](#2-Desarrollo-del-Producto)
* [3. Los principales usuarios de producto](#3-Los-principales-usuarios-de-producto)
* [4. El problema que resuelve el producto y para qué servirá](#4-El-problema-que-resuelve-el-producto-y-para-qué-servirá)
* [5. Prototipos](#5-Prototipos)
* [6. Historias de Usuario desarrolladas](#6-Historias-de-Usuario-desarrolladas)
* [7. Test de usabilidad](#7-Test-de-usabilidad)
* [8.  Objetivos de aprendizaje](#8-Objetivos-de-aprendizaje)

***

## 1. ¿En qué consiste Petlandia?
Petlandia es una red social de entretenimiento para los amantes de las mascotas, en cuál podran compartir a través de fotos o estados los momentos más divertidos junto a ellos. 

## 2. Desarrollo del Producto 
El producto presenta 4 vistas: una vista como ingreso de usuario registrado y otro para registrarse. Dentro de la app, como usuario registrado y en sesión, se presenta dos vistas, una llamada "home", en que se registra los posts del usuario, visualiza grupos de apoyo sobre mascotas, y su perfil. La ultima vista es "profile", donde el usuario logeado visualiza los posts únicos de él, y además puede modificar sus datos de perfil. 

![zoom-0-Slomo](https://user-images.githubusercontent.com/63525613/97816683-cf96b580-1c64-11eb-84ae-301af283fa34.gif)

## 3. Los principales usuarios de producto

Se realizó entrevistas a 5 personas de entre 15 y 30 años para determinar el perfil de 
nuestro usuario y conocer acerca de las expecttivas del desarrollo de un producto como Petlandia.

El usuario de Petlandia se presenta en el siguiente Arquetipo: 
![arquetipo_usuario](https://user-images.githubusercontent.com/63525613/97815120-f7cce700-1c59-11eb-83e8-97db5097d041.png)

En base a este perfil de usuario, se aplicaron entrevistas con las siguientes preguntas:
* ¿Puede contarme un poco sobre usted, a qué se dedica y qué hobbies tiene?.
* ¿Qué redes sociales es usted usuario en los últimos años? ¿Cuál ha sido su favorito?
* ¿Ha conseguido una red social cuyo tema principal ha sido las mascotas?
* ¿Le gustaría dedicar su tiempo de entretenimiento a una red social cuyo tema principal sea las mascotas?
* ¿Qué actividades le gustaría hacer en una red social cuyo tema principal sea las mascotas?
* ¿Hay algo de lo que no hayamos hablado que quisiera comentar?

### 3.1 Hallazgos de las entrevistas

* Las personas más interesadas en usar una red social enfocada en mascotas son de entre 20 y 30 años.
* La red social que más usan son Facebook e Instagram.
* El 80% de ellos desconocía de alguna red social enfocadas en mascotas.
* Como usuarios activos de una red social como Petlandia les gustaría agregar el nombre de sus mascotas a su perfil ,
compartir las fotos de sus mascotas y además hacer meetups con otros amantes de las mascotas. 
* Como usuarios pasivos , les gustaría poder ver las fotos de las mascotas de otros usuario y quizás comentarlas.


## 4. El problema que resuelve el producto y para qué servirá


A partir de los resultados de la entrevistas se identifica que Petlandia proporcionara un medio de comunicación para que diversos usuarios con mascotas puedan socializar, compartir información sobre sus mascotas y el cuidado a los mismos. Este producto garantiza una comunicación con seguridad para el usuario, quien puede compartir su información de manera segura con la comunidad de amantes de pets.

## 5. Prototipos 

Como producto de las entrevistas , desarrollamos los prototipos de baja y alta fidelidad para vista mobile y desktop.

### 5.1 Vista prototipo de baja fidelidad

![prototipobaja](https://user-images.githubusercontent.com/63525613/97815080-97d64080-1c59-11eb-8d30-04ee8431f4a3.jpg)


### 5.2 Vista prototipo de alta fidelidad

#### 5.2.1 Vista mobile

  ![mobile](https://user-images.githubusercontent.com/68167686/97643081-bf889700-1a14-11eb-9156-1aecd1a39ab2.png)

#### 5.2.2 Vista Desktop

  ![desktop1](https://user-images.githubusercontent.com/68167686/97643080-bef00080-1a14-11eb-9b6d-c24d399d47f6.png)
  ![desktop2](https://user-images.githubusercontent.com/68167686/97643074-bd263d00-1a14-11eb-9fc6-897cf38b7d80.png)

## 6. Historias de Usuario desarrolladas

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

### 7. Test de Usabilidad

Resultados del test de usabilidad :

* Mostrar el prototipo de alta fidelidad.
* Modificar la pregunta planteada en el input del post.
* Añadir el botón para eliminar las fotos antes de realizarse las publicaciones.
* Permitir tener información sobre adopción de mascotas, cuidado de mascotas y otras redes sociales relacionados a la temática.

## 8. Objetivos de aprendizaje

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
