const arr = [
  "shravan",
  "kumar",
  "is",
  "javascript",
  "developer",
  "is",
  "shravan",
  "is",
  "kumar",
];

function countwords(p) {
  // const output = p.reduce((allnames, name) => {
  //     if (name in allnames) {
  //         allnames[name]++;
  //     }
  //     else {
  //         allnames[name] = 1
  //     }
  //     return allnames;
  // }, {})

  let count = {};
  p.forEach((item) => {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  });

  return count;
}

console.log(countwords(arr));
