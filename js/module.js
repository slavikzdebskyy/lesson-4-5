// let counter = 0;

// const incrementCounter = () => {
//   counter++;
// }

// const getCounter = () => {
//   return counter;
// }

const module = (function counter(){
  let counter = 0;

  const incrementCounter = () => {
    counter++;
  }

  const getCounter = () => {
    return counter;
  }

  return {
    incrementCounter, //incrementCounter: incrementCounter
    getCounter
  }
})();