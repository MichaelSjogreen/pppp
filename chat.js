// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBc0d9gMWm9VPJ0G5OlLVypP0c_1XsPbHA",
    authDomain: "oooooo-d4fd1.firebaseapp.com",
    projectId: "oooooo-d4fd1",
    storageBucket: "oooooo-d4fd1.appspot.com",
    messagingSenderId: "723012243229",
    appId: "1:723012243229:web:fdd7afbc7afbf550249bf4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



