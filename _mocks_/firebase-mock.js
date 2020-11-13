const { auth } = require("../src/controllers/initialFirebase")

const auth = () => {
    return {
        createUserWithEmailAndPassword: (email, password) 
    }
}
const firebase = {
    auth: auth,
    firestore: firestore
}