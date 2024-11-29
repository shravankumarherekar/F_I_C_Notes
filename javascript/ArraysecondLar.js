const arr=[2,4,13,42,21,3];
let max =arr[0];
let max2=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max2=max;
        max=arr[i];
    } 
    else if(arr[i]>max2 && arr[i]!==max){
max2=arr[i];
    }
}
console.log(max2)
