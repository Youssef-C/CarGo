import app from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCLA8GFflDaXpos41WHWxlvHfR7Q32F6bo",
    authDomain: "cargo-63109.firebaseapp.com",
    projectId: "cargo-63109",
    storageBucket: "cargo-63109.appspot.com",
    messagingSenderId: "213045773365",
    appId: "1:213045773365:web:c8c54a6724a3acb367dd7c",
    measurementId: "G-RY4YGN98W1"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
