class Person {
  constructor(name, lastName, position) {
    this.name = name;
    this.lastName = lastName;
    this.position = position;
  }

  getInfo() {
    console.log(`This is ${this.name} ${this.lastName}`)
  }
}

const person = new Person('Petro', 'Sydorenko', 'Developer'); //{name, lastName, position}

// console.log(person);

function getFullInfo(companyName, city) {
  console.log(`${this.name} ${this.lastName} works as ${this.position} in ${companyName}. ${city}`)
}
// getFullInfo('Logos', 'Lviv');
// getFullInfo.call(person, 'Logos', 'Lviv')();
// getFullInfo.call(person, 'Logos', 'Lviv')();
// getFullInfo.apply(person, ['Logos', 'Lviv'])();


const olena = {
  name: 'Olena',
  lastName: 'Shevchenko',  
}

person.getInfo.bind(olena)();




// person.getInfo();

