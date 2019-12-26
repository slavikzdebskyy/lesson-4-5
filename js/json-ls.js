const user = {
  name: 'Oleh',
  email: 'oleh@ukr.net'
}

const key = 'my-logos-key';
const userString = JSON.stringify(user);

// console.log(userString);

// localStorage.setItem(key, userString); // localStorage.setItem('my-logos-key', JSON.stringify(user));
// localStorage.removeItem(key);

const dataString = localStorage.getItem(key);
const data = JSON.parse(dataString);

console.log(data);
