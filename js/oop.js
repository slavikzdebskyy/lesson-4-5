// const person = {
//   name: 'Petro',
//   age: 29,

//   greet: function() {
//     console.log('Greetings to you');
//   }
// }


const person = new Object( {
  name: 'Petro',
  age: 29,

  greet: function() {
    console.log('Greetings to you');
  }
})

Object.prototype.sayHello = function() {
  console.log('Hello world');
}

const olena = Object.create(person);
olena.name = 'Olena';


// const str = 'Some string';
const str = new String('Some string');


class Vechicles {

  toMove() {}
}

class Car extends Vechicles {
  constructor (...ars) {
    // ....
  }

  toMove() {
  // ...
  }
}

class Ship extends Vechicles {
  constructor (...ars) {
    // ....
  }

  toMove() {

  }
}