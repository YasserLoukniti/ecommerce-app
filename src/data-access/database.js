import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC4czPbddREsXFXBQdsLGmdvsPKw3kTzSE",
    authDomain: "estiamecommerceapp.firebaseapp.com",
    databaseURL: "https://estiamecommerceapp-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "estiamecommerceapp",
    storageBucket: "estiamecommerceapp.appspot.com",
    messagingSenderId: "927117712420",
    appId: "1:927117712420:web:fa4c3f84a7d56974064cb1"
  };
  export default initializeApp(firebaseConfig);


//   function pushProducts() {
//     const db = getDatabase(database);
//     productsData.forEach(product => {
//         set(ref(db, 'products/' + product.id), {
//             title: product.title,
//             prix: product.prix,
//             categorie: product.categorie,
//             color:product.color,
//             image:product.image
//         });
//     });
//     console.log("sent");
// }
