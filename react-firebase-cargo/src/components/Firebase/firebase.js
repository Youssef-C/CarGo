import app from 'firebase/app';

const firebaseConfig = {
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
    }
}

export default Firebase;

//Page 29