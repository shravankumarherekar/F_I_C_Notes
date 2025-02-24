const promise = new Promise((resolve, reject) => {
  let num = 8;
  if (num > 6) {
    resolve("promise resolved");
  } else {
    reject("rejected");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//   // Creating a Promise
// let myPromise = new Promise((resolve, reject) => {
//     let success = true; // You can change this to simulate success or failure

//     if(success) {
//         resolve("Operation was successful!");
//     } else {
//         reject("There was an error in the operation.");
//     }
// });

// // Consuming the Promise
// myPromise
//     .then((result) => {
//         console.log(result); // This will run if the Promise is resolved
//     })
//     .catch((error) => {
//         console.error(error); // This will run if the Promise is rejected
//     });
