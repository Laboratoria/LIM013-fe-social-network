<p align="center">
<a title="Travel-In" href= "https://emae1712.github.io/LIM013-fe-social-network/src/" target="_blank"><img width="90%" src="https://i.ibb.co/Hg33dxR/Travel-In.jpg" alt="Travel-In">
  </p>
  
# Travel In
### C. Goche, E. Arango & M. Pariona
>Social Network project
## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Definición del producto](#2-definición-del-producto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Diseño de Interfaz de Usuario](#4-diseño-de-interfaz-de-usuario)
* [5. Test de usabilidad](#5-Test-de-usabilidad)

## 1. 🧐Resumen del proyecto
El presente proyecto, **_TRAVEL IN_**, es una Red social destinada a personas interesadas en compartir sus experiencias de viajes, tips, recomendaciones y demás que puedan ser de utilidad para otros amantes de los viajes o que quieran iniciar en esta actividad. Esta red social te permitirá crear una cuenta de acceso y loguearse con ella; crear, editar, borrar, comentar y "likear" publicacciones, todo de forma dinámica.

## 2. 👩‍💻Definición del producto

El proyecto se inspiró en las redes sociales actuales, tales como Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Estas redes
sociales han invadido nuestras vidas, las cuales amamos u odiamos, y muchos no podemos vivir sin ellas.

A raiz de esto, decidimos crear una red social destinada a un objetivo en común, **viajes**. Si bien es cierto, actualmente existen diversos tipos de redes sociales, como equipo quisimos concentrarnos en usuarios interesados en los viajes como criterio de elección de usuarios, procuramos que sean de edades que representen a los distintos usuarios del juego, siendo el rango de edad escogido de 10 a 30 años. Elaboramos encuestas para saber que datos priorizan en el juego y entrevistas para analizar sus necesidades e iterar nuestros prototipos. 

De las encuestas y las entrevistas realizadas concluimos que nuestros usuarios querían una página que les brindara información clave antes de **iniciar una batalla Pokemon**, mas que informativo (que en un principio pensamos hacer), los usuarios querían datos puntuales para armar sus estrategias. Es por ello, que nuestra página web se ajusta a los requerimientos del usuario y lo ayuda de una forma intuitiva y eficaz a la lectura de datos, *mostrando la data de 251 pokemon* de las regiones Kanto y Johto, con una sección de *búsqueda*, aplicación de *filtros por tipo de pokemon y puntos de combate*, y un *cálculo* rápido de cuántos pokemon representan cada tipo seleccionado.

Como valor agregado, en pantallas desktop, desarollamos una interfaz mucho más interactiva. Brindándole al usuario la misma información, pero con el plus de poder sentirse parte del mundo de las batallas Pokemon de manera personalizada y sin la necesidad de estar en la propia app del juego(sólo disponible para movil).Brindándoles una experiencia completa, promoviendo la descarga del juego y fidelizando usuarios. 
 
* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Entrega](#6-entrega)
* [7. Pistas, tips y lecturas complementarias](#7-pistas-tips-y-lecturas-complementarias)

## 1. Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos
vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
en una ronda de financiamiento con inversionistas, se presentó una red social
para químicos en la que los usuarios podían publicar artículos sobre sus
investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
más comentado.

## 2. Resumen del proyecto

En este proyecto construirás una Red Social sobre lo que decidan tú y tu equipo.
Podría ser, por ejemplo, sobre alimentación saludable, feminismo, educación,
salud, energías renovables, amantes de las [Empanadas](https://es.wikipedia.org/wiki/Empanada)
o de los [Tacos de Canasta](https://es.wikipedia.org/wiki/Taco), de la
[Feijoada](https://es.wikipedia.org/wiki/Feijoada), o de lo que sea.

Tu Red Social tendrá que permitir a cualquier usuario crear una cuenta de
acceso y loguearse con ella; crear, editar, borrar y _"likear"_ publicacciones.

## 3. Objetivos de aprendizaje

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

## 4. Consideraciones generales

* Este proyecto se debe trabajar en equipos de tres.

* La lógica del proyecto debe estar implementada completamente en JavaScript
  (ES6+), HTML y CSS :smiley:. Para este proyecto **no está permitido** utilizar
  _frameworks_ o librerías de CSS y JS.

* La división y organización del trabajo debe permitir, sin excepciones, que
  **cada integrante** del equipo practique el aprendizaje de todo lo involucrado
  en **cada historia**. _No se dividan el trabajo como en una fábrica._
  - ¿Hasta acá has avanzado en tus proyectos con cierta fluidez y sin mayores
    problemas? Sé generosa con tus compañeras, permíteles aprender y practicar
    sin restricciones, aunque tome un poco más de tiempo. Aproveha de
    _coachearlas_, de hacer _pair programming_, una de las mejores maneras de
    aprender es explicando verbalmente.

  - ¿Se te está haciendo difícil y te cuesta un poco más avanzar? No te quedes
    con las partes "fáciles" del proyecto, conversa, negocia, exige tu oportunidad
    para practicar y aprender lo que se te hace más difícil.

* Solamente pueden trabajar en una única historia por vez, no pueden avanzar a
  la siguiente sin haber completado la anterior. La historia se completa cuando
  se cumplen **todos** sus Criterios de Aceptación + **toda** su Definición
  de Terminado.

Para comenzar tendrás que hacer un _fork_ y _clonar_ este repositorio.

## 5. Criterios de aceptación mínimos del proyecto

### 5.1 Definición del producto

En el `README.md` cuéntanos brevemente cómo descubriste las necesidades de los
usuarios y cómo llegaste a la definición final de tu producto. Es importante
que detalles:

* Quiénes son los principales usuarios de producto.
* Qué problema resuelve el producto / para qué le servirá a estos usuarios.

### 5.2 Historias de usuario

Para este proyecto vamos a entregarte las Historias de  Usuario para tú junto a tu equipo
puedan escribir los criterios de aceptación y definición determinado de cada una. Recuerda 
priorizar la implementación de tus funcionalidades, en función al esfuerzo que demandan en
relación al valor que le aportan al usuario, y ejecutar en equipo todas las historias de
usuario dentro del tiempo estimado para cada sprint y que finalmente se vean reflejadas 
en publicaciones completamentamente funcionales al final de cada sprint.

* Como usuario nuevo debo poder crear una cuenta con email y password válidos para ingresar
a la red social.

* Como usuario registrado debo poder iniciar sesión con email y password válidos para ingresar
a la red social.

* Como usuario nuevo debo poder iniciar sesión con mi cuenta de Google o Facebook para ingresar a la red social (sin necesidad de crear una cuenta de email válido).

* Como usuario loggeado debo poder crear, guardar, modificar en el mismo lugar (in place) y eliminar una publicación (post) privada o pública, que puede ser una frase o una imagen.

* Como usuario loggeado debo poder ver todos los posts públicos y privados que he creado hasta ese momento, desde el más reciente hasta el más antiguo, así como la opción de poder cambiar la configuración de privacidad de mis posts para poder elegir la privacidad de mis publicaciones.

* Yo como usuario loggeado, puedo dar like y llevar un conteo de likes en las publicaciones para poder indicar que me gusta una publicación.

* Yo como usuario loggeado debo poder escribir, guardar, editar o eliminar un comentario en una publicación para poder compartir mi opinión o hacer preguntas.

* Yo como usuario loggeado debo poder visualizar los datos de mi perfil creado y editarlos para actualizar mi información.

Te dejamos un ejemplo de cómo definir criterios de aceptación y definiciones de terminado para una H.U. Si se te complica definirlas o no tienes idea de que considerar para cada H.U. es de gran ayuda revisar redes sociales como `facebok`, `twitter`, `instagram`, `tik tok` o la red social que más te guste y puedas evaluar qué consideran en cada funcionalidad para darla como terminada y aceptada. De igual manera recuerda considerar tus objetivos de aprendizaje en tu planificación.

   > Como usuario registrado debo poder iniciar sesión con email y password válidos para ingresar
   > a la red social.
   >
   > **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
   > necesidades del usuario.
   > - Si el mail o password no es válido, al momento de logearme, debo poder 
   >   ver un mensaje de error.
   > - Debe ser visible si hay algún mensaje de error.
   > - Debo poder ver esta página de creación en Móviles y desktop (responsive). 
   > - No debe necesitar recargar la página para crear una cuenta (SPA).
   >
   > **Definición de terminado:** todos los aspectos técnicos que deben cumplirse
   > para que, como equipo, sepan que esa historia está terminada y lista
   > para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben
   > incluir estos aspectos en su Definición de Terminado (más todo lo que
   > necesiten agregar):
   > - La funcionalidad cumple y satisface los criterios de aceptación.
   > - La funcionalidad tiene _test unitarios_.
   > - El diseño visual corresponde al prototipo propuesto.
   > - El código de esta funcionalidad recibió code review de una o dos compañeras 
   > de otro equipo.
   > - La funcionalidad esta desplegada y pública para ser probada. 
   > - La funcionalidad fue probada manualmente buscando errores e imperfecciones simples..
   > - La página es responsive (mobile first)
   > - Se hicieron pruebas de usuabilidad y se implementó el feedback si se 
   >   consideró necesario.


### 5.3 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu aplicación
y, con eso, diseñar la Interfaz de Usuario (UI por sus siglas en inglés) que
siga este flujo.

A continuación te proporcionamos un layout (diseño) de la vista mobile y desktop que puedes
elegir replicar visualmente y cuyo contenido, colores y fuentes de texto, dejaremos a tu elección.
En caso de elegir trabajar con este layaout (diseño) ya no deberás de crear un prototipo de baja
fidelidad.

* Vista mobile

    ![mobile](https://user-images.githubusercontent.com/32286663/56174616-ec9f6100-5fb8-11e9-9edb-d5ef7c251d9c.png)

* Vista Desktop

    ![desktop](https://user-images.githubusercontent.com/32286663/56174626-fcb74080-5fb8-11e9-8854-26e8d9c4e25f.png)

### 5.4 Consideraciones técnicas Front-end

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con múltiples vistas. Para esto, tu aplicación debe ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application).
 Te recomendamos revisar la [Píldora de SPA](https://www.loom.com/share/fa63a8ad0e9a43428222c15b6f6613d3) que también
 puedes encontrar en la sección de recursos al final del `Readme.md`. De igual manera puedes revisar 
 [este repositorio](https://github.com/merunga/todomvc-vanillajs) donde puedes ver cómo construir un To-do MVC con `vanillajs`.
* Debe ser responsive por lo cual debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (_tablets_, celulares, etc.). Te
sugerimos seguir la técnica de _`mobile first`_ (más detalles sobre esta técnica
al final). De igual manera no está permitido el uso de frameworks de CCS (bootstrap).
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación. Te recomendamos que uses
  [Firebase](https://firebase.google.com/) para eso también.

#### Pruebas unitarias (unit tests)

* Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
  _lines_, y _branches_. Te recomendamos revisar la [Pildora de mock Firebase](https://www.youtube.com/watch?v=06myVn41OTY&t=1s)
  que también puedes encontrar en la sección de recursos al final del `Readme.md`.

### 5.8 Consideraciones técnicas UX

* Hacer al menos 2 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de _testing de usabilidad_ con el producto en HTML.

## 6. Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

***

## 7. Pistas, tips y Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
En este proyecto te invitamos a explorar opciones y decidir una opción
de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firebase](https://firebase.google.com/).

### Autenticación y autorización

Hasta el momento, los proyectos han sido pensados como recursos públicos, donde todos
los usuarios compartían un mismo rol y la misma información.

En este proyecto tendrás que diferenciar la información a mostrar y modificar,
dependiendo de la identidad del usuario.
De la misma manera deberás crear reglar de autorización para el acceso a los
datos.

Para esto utilizaras respectivamente
[`Firebase authentication`](https://firebase.google.com/docs/auth/) y
[`Firestore security rules`](https://firebase.google.com/docs/firestore/security/get-started)

### Otras:

* [Píldora SPA](https://www.loom.com/share/fa63a8ad0e9a43428222c15b6f6613d3)
* [Repositorio de píldora de SPA](https://github.com/betsyvies/bootcamp-spa)
* [`flexbox`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Pildora de mock Firebase](https://www.youtube.com/watch?v=06myVn41OTY&t=1s)
* [Repositorio de pildora de mock Firebase](https://github.com/Danielalab/2018-2-Testing)
* [Pildora MVC](https://github.com/merunga/todomvc-vanillajs)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)

***
