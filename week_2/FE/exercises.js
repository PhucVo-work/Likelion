// // const userList = [
// //     {
// //         id: 1,
// //         name: "Nguyễn Văn Tèo"
// //     }
// // ]

// // // đây là Spread Operator
// // userList[0] = {
// //     ...userList[0],
// //     age: 80,
// // }

// //
// // const arr2 = ([first, ...rest] = [1, 2]);
// // console.log(first);
// // console.log(rest);

// // function sum(...number) {
// //   return number.reduce((a, b) => a + b, 0);
// // }

// // console.log(sum(1, 2, 3));

// // // Spread Operator với function
// // function greet({name, age,}){
// //     console.log(`name: ${name}, age: ${age}`);
// // }

// // const greet = greet(...userList[0])

// // console.log(greet);

// // // đây là Destructuring
// // // function greet({name, age,}){
// // //     console.log(`name: ${name}, age: ${age}`);
// // // }

// // // greet(userList[0])

// /// callback hell problemn

// setTimeout(() => {
//   console.log();
//   setTimeout;
// }, 1000);

// // solution for call back hell

// function delay(ms, message) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve;
//     }, ms);
//   });
// }

// console.log("start");


// delay(1000, "step 1")
//     .then(()=>delay(1000, "step 2"))
//     .then(()=>delay(1000, "step 3"))
//     .then(()=>delay(1000, "stop"))

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nhập tên của bạn: ", (answer) => {
  console.log(`Xin chào, ${answer}`);
  rl.close();
});
