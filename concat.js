const first = "Abid";
const last = "Islam";

// const fullName = first + last;
const fullName = first + " " + last;
console.log(fullName); 
const fullName2 = first.concat(last);
console.log(fullName2);

const fullName3= first.concat(" ").concat(last);
console.log(fullName3);


// includes

console.log(last.includes("a"));
console.log(last.includes("x"));
