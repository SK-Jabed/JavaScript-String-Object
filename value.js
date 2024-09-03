const person = {
  name: "Habu Mia",
  age: 42,
  profession: "Developer",
  salary: 25000,
  married: true,
  "fav places": ["Bandorbon", "Saint-Martin", "Cox's Bazar"] 
}

person.salary = 30000;
person["age"] = 52;
person["fav places"] = ["Maldives", "Bali", "Kashmir"];
console.log(person);


const propName = "profession";
person[propName] = "devops";
console.log(person);
