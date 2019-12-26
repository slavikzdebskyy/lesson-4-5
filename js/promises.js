// let a;

// setTimeout(() => {a = 10}, 500);

// console.log(a);

const URL = 'https://jsonplaceholder.typicode.com/albums';

// const getData = (url, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.responseType = 'json';
//   xhr.onload = () => {
//     const status = xhr.status;
//     if (status === 200) {
//       callback(null, xhr.response);
//     } else {
//       callback(status, xhr.response);
//     }
//   };
//   xhr.send();
// };

// getData(URL, (error, data) => {
//     if (error) {
//       console.error(error)
//     } else {
//       console.log(data);
//     }
//   });


const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve({data: {msg : 'I resolved'}}), 3000)
  setTimeout(() => reject({error: 'I rejected'}), 4000)
});


// promise
//   .then(({data}) => data.msg)
//   .then(data => console.log(data))
//   .catch(error => console.error(error))


fetch(URL)
  .then(response => response.json())
  // .then(data => data.map(item => item.title))
  .then(data => data.filter(item => item.userId === 6))
  .then(data => console.log(data))
  .catch(error => console.error(error));


  