import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
    apiKey: "AIzaSyAHkP6jSU5WQW14I_q3l3OCvuUBGJkfDG4",
    authDomain: "contador-de-impressoes.firebaseapp.com",
    databaseURL: "https://contador-de-impressoes-default-rtdb.firebaseio.com",
    projectId: "contador-de-impressoes",
    storageBucket: "contador-de-impressoes.appspot.com",
    messagingSenderId: "571151150133",
    appId: "1:571151150133:web:50aa4146ccb7b127d4d57c"
};

const app = initializeApp(clientCredentials);


export default app;