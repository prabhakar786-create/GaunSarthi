const firebaseConfig = {

apiKey:"YOUR_API_KEY",

authDomain:"gaunsarthi.firebaseapp.com",

databaseURL:"https://gaunsarthi-default-rtdb.firebaseio.com",

projectId:"gaunsarthi",

storageBucket:"gaunsarthi.appspot.com",

messagingSenderId:"12345",

appId:"APP_ID"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
