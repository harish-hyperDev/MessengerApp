//import firebase from 'firebase';
import 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/*
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfUQrKu7eNxE9C8baGIAgMMIl2L4icsew",
    authDomain: "mitai-app.firebaseapp.com",
    projectId: "mitai-app",
    storageBucket: "mitai-app.appspot.com",
    messagingSenderId: "835987929957",
    appId: "1:835987929957:web:44190dabb33940728c3f8c"
};

const app = initializeApp(firebaseConfig);
const dbb = getFirestore(app);

*/

const firebaseApp = initializeApp({

    apiKey: "AIzaSyCfUQrKu7eNxE9C8baGIAgMMIl2L4icsew",
    authDomain: "mitai-app.firebaseapp.com",
    projectId: "mitai-app",
    storageBucket: "mitai-app.appspot.com",
    messagingSenderId: "835987929957",
    appId: "1:835987929957:web:44190dabb33940728c3f8c"
    
});

const dbb = getFirestore(firebaseApp);

export default dbb;
