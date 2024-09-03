const person = {
  name: "Habu Mia",
  age: 42,
  profession: "Developer",
  salary: 25000,
  married: true,
  "fav places": ["Bandorbon", "Saint-Martin", "Cox's Bazar"] 
}

// console.log(person);

// dot notation
// Access property value of object by using dot symbol

console.log(person.profession);
const income = person.salary;
console.log(income);

// bracket notation
// Access with third bracket
console.log(person["age"]);

const boyos = person["age"];
console.log(boyos);

// console.log(person."fav places");
console.log(person["fav places"]);

const keyName = "profession";
console.log(person[keyName]);