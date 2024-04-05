// EXAMPLE 1 - Convert JSON object to Buffer and vice versa in Node.js

const obj = {
  id: 1,
  name: 'bobby hadz',
  salary: 500,
};

const buf = Buffer.from(JSON.stringify(obj));
// 👇️ <Buffer 7b 22 69 64 22 3a 31 2c 22 6e 61 6d 65 22 3a 22 62 6f 62 62 79 20 68 61 64 7a 22 2c 22 73 61 6c 61 72 79 22 3a 35 30 30 7d>
console.log(buf);

// 👇️ {"id":1,"name":"bobby hadz","salary":500}
console.log(buf.toString());

// ------------------------------------------------------------------

// // EXAMPLE 2 - Converting the Buffer back to an object

// const obj = {
//   id: 1,
//   name: 'bobby hadz',
//   salary: 500,
// };

// const buf = Buffer.from(JSON.stringify(obj));

// // 👇️ convert buffer back to object
// const objAgain = JSON.parse(buf);
// console.log(objAgain); // 👉️ { id: 1, name: 'bobby hadz', salary: 500 }
// console.log(typeof objAgain); // 👉️ object

// console.log(objAgain.id); // 👉️ 1
// console.log(objAgain.name); // 👉️ bobby hadz
// console.log(objAgain.salary); // 👉️ 500

// ------------------------------------------------------------------

// // EXAMPLE 3 - Converting an Object to a buffer using v8 serialize()

// import {serialize, deserialize} from 'v8';

// const obj = {
//   id: 1,
//   name: 'bobby hadz',
//   salary: 500,
// };

// const buf = serialize(obj);
// // 👇️ <Buffer ff 0f 6f 22 02 69 64 49 02 22 04 6e 61 6d 65 22 0a 62 6f 62 62 79 20 68 61 64 7a 22 06 73 61 6c 61 72 79 49 e8 07 7b 03>
// console.log(buf);

// const objAgain = deserialize(buf);

// // 👇️ { id: 1, name: 'bobby hadz', salary: 500 }
// console.log(objAgain);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Converting an Object to a buffer using BSON

// import {serialize, deserialize} from 'bson';

// // or import using CommonJS
// // const {serialize, deserialize} = require('bson');

// const obj = {
//   id: 1,
//   name: 'bobby hadz',
//   salary: 500,
// };

// const buf = serialize(obj);
// // 👇️ <Buffer ff 0f 6f 22 02 69 64 49 02 22 04 6e 61 6d 65 22 0a 62 6f 62 62 79 20 68 61 64 7a 22 06 73 61 6c 61 72 79 49 e8 07 7b 03>
// console.log(buf);

// const objAgain = deserialize(buf);

// // 👇️ { id: 1, name: 'bobby hadz', salary: 500 }
// console.log(objAgain);
