class Pizza {

  constructor(size,crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese", 'beef','chicken'];
  }
  set size(size){
    if (size === 's' || size === 'm' || size === 'l'){
      this._size = size;
    }
    else{
      return 'Invalid size';
    }
  }
  getSize() {
    return this.size;
  }
  get price(){
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
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

let pizza = new Pizza();
pizza.size = 's';
//pizza.getSize();
//console.log(pizza.getPrice());

class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.email = email;
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
  bio() {
    return `I'm ${this.name} a student at Lighthouse Labs (aka Labber).`;
  }
}

class Mentor extends Person {
  // specific to mentors
  bio() {
    return `I'am a mentor at Lighthouse Labs. My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

const Emeka = new Student('Emeka Dev,');
console.log(Emeka.bio());

const bob = new Mentor('Bob Ross','I like mountains way too much');
console.log(bob.bio());




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








