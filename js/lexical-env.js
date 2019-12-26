const message = 'Lexical enviroment in JavaScript';
const value = 10;

// global: {parentScope: null, message: '...', value: 10}

const foo = () => {

 
 // foo: {parentScope: global}

  const value = 5;

  // foo: {parentScope: global, value: 5}

  const innerFoo = () => {
    console.log(value);
    // innerFoo: {parentScope: foo}
  }

  // foo: {parentScope: global, value: 5 , innerFoo: function}

  innerFoo();

  console.log(message);
}

// global: {message: '...', value: 10, foo: function}



foo();

