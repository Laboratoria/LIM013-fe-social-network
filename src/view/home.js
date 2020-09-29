export default () => {
  const viewHome = document.createElement('section');
  viewHome.innerHTML = `
  <p>bienvenidos</p>
  <p>username</p>
  <input type="text"> </input>
  <p>email</p>
  <input type="text"> </input>
  <p>fecha de nacimiento</p>
  <input type="text"> </input>
  <p>telefono</p>
  <input type="text"> </input>
  <p>descripción</p>
  <input type="text"> </input>
  <p>País</p>
  <input type="text"> </input>
  <p>foto</p>
  <button class="btn-enviar">Enviar</button>
  `;
  const db = firebase.firestore();
  db.collection('datos').add({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  });
  return viewHome;
};
