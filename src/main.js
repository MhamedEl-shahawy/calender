import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import  VueTextareaAutosize from "vue-textarea-autosize"
import firebase from "firebase/app"
import 'firebase/firestore'
Vue.config.productionTip = false;
Vue.use(VueTextareaAutosize);
firebase.initializeApp({

  apiKey: "AIzaSyCYNPsgr8bDa8sgOL9taJLAdAtTFn0dbJQ",
  authDomain: "calender-1cd4c.firebaseapp.com",
  databaseURL: "https://calender-1cd4c.firebaseio.com",
  projectId: "calender-1cd4c",
  storageBucket: "calender-1cd4c.appspot.com",
  messagingSenderId: "142521179971",
  appId: "1:142521179971:web:0e76735428b8d88810d9f6",
  measurementId: "G-3K2XZ9HKMB"


})

export const db =firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
