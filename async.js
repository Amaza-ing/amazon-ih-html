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


const CHARACTERS_API = "https://rickandmortyapi.com/api/character";

async function getCharacters() {
  try {
    const response = await fetch(CHARACTERS_API);
    const data = await response.json();

    console.log(data);
    console.log(data.results[0].image);
    
    data.results.forEach((characterObj) => {
      const characterImage = characterObj.image;
      const imgElement = document.createElement("img");

      imgElement.setAttribute("src", characterImage);
      imgElement.setAttribute("width", 200);
      document.body.appendChild(imgElement);
    })   

  } catch(error) {
    console.log("No se ha podido conectar a la API");    
  }
}

getCharacters();