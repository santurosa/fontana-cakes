// Vamos a importar estas dos funciones de la libre ia Firebase.
// initializeApp = esta función la utilizo para iniciar la conexión con FireBase.
// getFirestore = se utiliza para obtener una instancia de FireStore.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Estamos trabajando con un objeto con toda nuestra información de la cuenta. Acá se incluye la Key personal de acceso a la BD.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fontana-cakes.firebaseapp.com",
  projectId: "fontana-cakes",
  storageBucket: "fontana-cakes.appspot.com",
  messagingSenderId: "151342821470",
  appId: "1:151342821470:web:ce8b4302201c0c8151c4cf"
};

// Inicializamos Firebase y se pasa la configuración como argumento. Esto devuelve una instancia de Firebase.
const app = initializeApp(firebaseConfig);

// Exportamos esta referencia para que este disponible en toda nuestra aplicación.
export const db = getFirestore(app);