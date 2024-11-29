// input : [1,2,3,4,5], number of rotation: 3
//  step 1: [5,1,2,3,4]
// step 2: [4,5,1,2,3]
// step 3: [3,4,5,1,2]

let arr=[1,2,3,4,5]
function arrrotation(arr, rotation){
for(let i=0;i<rotation;i++){
    arr.unshift(arr.pop());
}
return arr;
}

console.log(arrrotation(arr,3));

