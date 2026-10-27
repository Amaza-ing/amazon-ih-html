console.log("Arrays!");

// Arrays

const numArray = [10, 20, 30, 40];
console.log(numArray);

const countries = ["España", "Venezuela", "México"];
console.log(countries);

const products = [
  {
    name: "Ordenador",
    price: 1000,
    isAvailable: true
  },
  {
    name: "Teclado",
    price: 50,
    isAvailable: true
  },
  {
    name: "Ratón",
    price: 20,
    isAvailable: false
  }
];

console.log(products);

// forEach

numArray.forEach((number) => {
  console.log(number);
})

countries.forEach((country) => console.log(country));

products.forEach((product) => console.log(product));

// map

const doubleNumbers = numArray.map((number) => {
  return number * 2;
})
console.log(doubleNumbers);
console.log(numArray);


const IVAPrecios = numArray.map((number) => number * 1.21);
console.log(IVAPrecios);

const upperCountries = countries.map((country) => country.toUpperCase())
console.log(upperCountries);
console.log(countries);

const IVAPrecioProductos = products.map((product) => product.price * 1.21);
console.log(IVAPrecioProductos);

const productsCopy = structuredClone(products);

const productosConIVA = productsCopy.map((product) => {
  const updatedPrice = product.price * 1.21;
  product.price = updatedPrice;
  return product;
})
console.log(productosConIVA);
console.log(products);

// filter

const bigNumbers = numArray.filter((number) => number >= 25);
console.log(bigNumbers);

const filteredCountries = countries.filter((country) => country.charAt(0) === "V");
console.log(filteredCountries);

const availableProducts = products.filter((product) => product.isAvailable);
console.log(availableProducts);

// reduce

const sumResult = numArray.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sumResult);

// toSorted

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// const sortedNumbers = numbers.toSorted();
const sortedNumbers = numbers.toSorted((a, b) => a - b);
console.log(sortedNumbers);

const sortedProducts = products.toSorted((a, b) => a.price - b.price);
console.log(sortedProducts);
console.log(products);

// toReversed

const revNumArr = numArray.toReversed();
console.log(revNumArr);

const revCountries = countries.toReversed();
console.log(revCountries);

const revProducts = products.toReversed();
console.log(revProducts);


