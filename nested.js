const institute = {
  name: "Dhaka Polytechnic Institute",
  department: 12,
  location: "Tejgaon",
  events: ["Science fair", "Practical session"],
  unique: {
    color: "white",
    result: {
      gpa: 5,
      merit:"top"
    }
  }
}


// console.log(institute.name);
console.log(institute.unique);
console.log(institute.unique.result);
institute.unique.result.merit = "top most";
console.log(institute.unique.result.merit);
institute.events[1] = "Independence Day";
console.log(institute.events[1]);
delete institute.location;
console.log(institute);