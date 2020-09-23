import { views } from '../view/index.js';

export default () => {
    const view = views.login();
    const btnGmail = view.querySelector('#btn-gmail');
    btnGmail.addEventListener('click', (e) => {
        e.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log(result),
            })
            .catch((error) => {
                console.log(error),
            });
    });
}
