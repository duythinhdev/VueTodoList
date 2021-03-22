import { createApp } from 'vue';
import App from './components/App/App.vue';
import router from "./router";

import firebase from "firebase/app";

var firebaseConfig = {
    apiKey: "AIzaSyBnrgAxSKWnd_qaOEexHTMPRBV7z6QB4NE",
    authDomain: "vuetodolist-571c3.firebaseapp.com",
    databaseURL: "https://vuetodolist-571c3-default-rtdb.firebaseio.com",
    projectId: "vuetodolist-571c3",
    storageBucket: "vuetodolist-571c3.appspot.com",
    messagingSenderId: "731814688528",
    appId: "1:731814688528:web:36501bf88ffdf87d07d795",
    measurementId: "G-JE2E54L6FY"
};
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
