//arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

let arr=[1,2,3,4,5];

Array.prototype.myreduce=function(callbackFn,initialValue){
    var accumulator=initialValue;
    for(var i=0;i<this.length;i++){
        if(accumulator!==undefined){
          accumulator=callbackFn.call(undefined,accumulator,this[i],i,this);
        }
        else{
            accumulator=this[i];
        }
    }
    return accumulator;
}

console.log(arr.myreduce((acc, curr) => acc + curr, 0))