class Pizza {

  constructor(size,crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}
class SomeClass {
  methodName(parameters) {
  }
  SomeMethod() {
    this.hello = "hi";
  }
}

let pizza1 = new Pizza();
//console.log(pizza1.toppings);
let someClass = new SomeClass();
//console.log(someClass.hello);
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings);

let pizza2 = new Pizza();
console.log(pizza2.toppings);
pizza2.addTopping("more cheese");
console.log(pizza2.toppings);

let pizza = new Pizza('large', 'thin');

class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}


class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}





// let pizza = {
//   size: 'large',
//   crust: 'thin',
//   toppings: ["cheese"]
// }




// const pizza1 = {
//   toppings: ["cheese"],
//   addTopping: function(topping) {
//     this.toppings.push(topping);
//   }
// }

// const pizza2 = {
//   toppings: ["cheese"],
//   addTopping: function(topping) {
//     this.toppings.push(topping);
//   }
// }








