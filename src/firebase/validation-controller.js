
export const validation = callback => firebase.auth().onAuthStateChanged((user) => {
    let route = '#/signIn';
    if (window.location.hash === '#/Register') route = '#/Register';
} );
};
