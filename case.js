const institute = "Dhaka Polytechnic Institute";
console.log(institute);
console.log(institute.toLowerCase());
console.log(institute.toUpperCase());


// uppercase: ABCD EFG
// lowercase: abcd efg


const subject = "English";
const book = "english";

if(subject === book) {
    console.log("I like English");
}
else {
    console.log("I don't like english");
} 


const sub = "Chemistry";
const boi = "ChemIsTry";

if(sub.toLowerCase() === boi.toLowerCase()) {
    console.log("Chemistry is my favorite subject");
}
else {
    console.log("Chemistry is not my favorite subject");
}


const drink = "water";
const liquid = " water ";

if(drink.trim() === liquid.trim()) {
    console.log("Water is life");
}
else {
    console.log("Life is water");
}

