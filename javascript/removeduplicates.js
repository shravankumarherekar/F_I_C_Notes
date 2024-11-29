const arr=[1,2,34,4,5,2,1,21];
// let output=[];
// for(let i=0;i<arr.length;i++){
//     if(output.includes(arr[i])){
//         console.log(arr[i])
//     }
//     else{
//         output.push(arr[i]);
//     }
// }
const uniqueArr=[];
for(let i=0;i<arr.length;i++){
    if(uniqueArr.indexOf(arr[i]) === -1){
        uniqueArr.push(arr[i]);
    }
}
console.log(uniqueArr);