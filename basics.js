console.log("Bienvenidos a JavaScript");

let year = 2026;
let username = "Adrián";
let myBoolean = false;

console.log("Estamos en el año: " + year);
console.log("El usuario es: " + username);
console.log("El valor booleano es: " + myBoolean);

username = "Adrián Maza";
console.log("El nombre es: " + username);

// Operadores numéricos

let num1 = 10;
let num2 = 5;

const sumResult = num1 + num2;
const subResult = num1 - num2;
const mulResult = num1 * num2;
const divResult = num1 / num2;

console.log(sumResult, subResult, mulResult, divResult);

num1 = 100;
console.log(num1);

num1 = num1 + 5;
console.log(num1);

// num1 = num1 + 1;
num1++;
console.log(num1);

num1--;
console.log(num1);

// Strings

let food1 = "pan";
let food2 = "queso";
let food3 = `

        pizza ${food1}


`;

console.log(food1);
console.log(food2);
console.log(food3);

const food = food1 + " " + food2;
console.log(food);

console.log(food.length);
console.log(food.toUpperCase());
console.log(food.at(0));

// Otros tipos de datos primitivos

let myVariable;
console.log(myVariable);

let myNull = null;
console.log(myNull);

// Condicionales

let userAge = -10;

if (userAge >= 18) {
  console.log("El usuario es mayor de edad");
} else if (userAge < 0) {
  console.log("La edad no puede ser negativa");
} else {
  console.log("El usuario es menor de edad");
}

let userCountry = "México";

if (userCountry === "España") {
  console.log("El país del usuario es España");  
}

if (10 === "10") {
  console.log("10 es igual '10'");  
}

if (!true) {
  console.log("La condición es verdadera");  
}

userCountry = "";

if (!userCountry) {
  console.log("El usuario no ha indicado su país");  
}

/*
TRUTHY || FALSY

true   || false
1234   || 0
"abc"  || ""
       || undefined
       || null
{}     ||
[]     ||
*/

let isTruthy = [];

if (isTruthy) {
  console.log("La condición es truthy");  
} else {
  console.log("La condición es falsy");  
}