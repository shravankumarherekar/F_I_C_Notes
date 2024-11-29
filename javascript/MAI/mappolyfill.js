Array.prototype.mymap=function(callbackFn){
    var arr=[];
    for(var i=0;i<this.length;i++){
arr.push(callbackFn(this[i],i,this));
    }
    return arr;
}

let arr=[1,2,3,4,5];

let output=arr.mymap((val)=>val*2)
console.log(output);

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//      return element for newArray, after executing something
//   });