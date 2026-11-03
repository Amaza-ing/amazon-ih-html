console.log("JavaScript asíncrono");

// setTimeout(() => {
//   console.log("Dentro del setTimeout");  
// }, 2000);
// console.log("El código ha llegado hasta aquí");


// fetch API

const API_URL = "https://jsonplaceholder.typicode.com/users";

// notación .then

// fetch(API_URL)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Algo ha ido mal"));

// notación async/await

// async function getUsers() {
//   try {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     console.log(data);
//   } catch(error) {
//     console.log("Algo ha ido mal")
//   }
// }

// getUsers();