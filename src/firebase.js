import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDwgzTUCw8Y2md_Eua-QFiHc0s5Xsp61BY",
	authDomain: "fir-app-a18e3.firebaseapp.com",
	projectId: "fir-app-a18e3",
	storageBucket: "fir-app-a18e3.appspot.com",
	messagingSenderId: "154064936485",
	appId: "1:154064936485:web:67b2b50caa48d1607769cc",
	databaseURL: "https://fir-app-a18e3-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
export { app };
