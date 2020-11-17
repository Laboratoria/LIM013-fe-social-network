import { auth, fstore } from "./initialFirebase.js";

const signUp = (email, password) =>
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = "#/home";
    })
    .catch((error) => {
      document.querySelector(".message-error").innerHTML = `${error.message}`;
    });

const signIn = (email, password) =>
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = "#/home";
    })
    .catch((error) => {
      document.querySelector(".message-error").innerHTML = `${error.message}`;
    });

const signInWithGoogle = (provider) =>
  auth
    .signInWithPopup(provider)
    .then(() => {
      window.location.hash = "#/home";
    })
    .catch((error) => console.log("error", error));

const signInWithFacebook = (provider) =>
  auth
    .signInWithPopup(provider)
    .then(() => {
      window.location.hash = "#/home";
    })
    .catch((error) => console.log("error", error));

const getPosts = (callback) =>
  fstore
    .collection("posts")
    .get()
    .then((snapshot) => {
      console.log(snapshot);
      const data = [];
      snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        data.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          image: doc.data().image,
        });
      });
      callback(data);
    });
export { getPosts, signUp, signIn, signInWithGoogle, signInWithFacebook };
