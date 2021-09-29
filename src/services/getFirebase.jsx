import firebase from 'firebase/app'
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDKn8foiqSDsRuv9GyMdjxwSDQHOBslO2g",
    authDomain: "ch-react-f7e35.firebaseapp.com",
    projectId: "ch-react-f7e35",
    storageBucket: "ch-react-f7e35.appspot.com",
    messagingSenderId: "847920279024",
    appId: "1:847920279024:web:71d82d5f268d8e94814135"
};

const app = firebase.initializeApp(firebaseConfig);



export function getFirestore() {
    return firebase.firestore(app)
}