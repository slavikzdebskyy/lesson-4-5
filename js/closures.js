function multi(n) {
  return function(m) {
   return n * m;
  }
}

const multiTen = multi(10);

// console.log(multiTen(2)); 
// console.log(multi(2)(12)); 


function generateUrl(domen) {
  return function(url) {
    return `https://${url}.${domen}`;
  }
}

const uaDomen = generateUrl('ua');
const comDomen = generateUrl('com');

// console.log(uaDomen('logos'));
// console.log(comDomen('bukovel'));


const person1 = {
  name: 'Vasyl',
  lastName: 'Petrenko',
  position: 'developer'
}

const person2 = {
  name: 'Anna',
  lastName: 'Sydorenko',
  position: 'QA',
}

function getFullInfo(companyName, city) {
  console.log(`${this.name} ${this.lastName} works as ${this.position} in ${companyName}. ${city}`)
}

function bind(context, fn) {
  return function(...args) {
    fn.apply(context, args);
  }
}
const log = bind(person2, getFullInfo);

log('Logos', 'Lviv');




