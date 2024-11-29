//Write a function to flatten a nested array (convert [1, [2, [3, 4]], 5] to [1, 2, 3, 4, 5]).

let arr= [1, [2, [3, 4]], 5]

function flattenArray(arr){
return arr.reduce((acc,curr)=>{
    if(Array.isArray(curr)){
        acc.push(...flattenArray(curr));
    }
    else{
        acc.push(curr)
    }
    return acc;
},[])
}
let ouputArray=flattenArray(arr);
console.log(ouputArray)

function flattenarray(arr){
    return arr.reduce((acc,curr)=>{
        if(Array.isArray(curr)){
            acc.push(...flattenarray(curr));

        }
        else{
            acc.push(curr);
        }
        return acc;
    },[])
}

function arrreduce(arr){
return arr.reduce((acc,curr)=>{
    if(Array.isArray(curr)){
        acc.push(...arrreduce(curr))
    }
else{
    acc.push(curr);
}
return acc;
},[])
}