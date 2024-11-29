let arr=[1,2,3,4,5]

Array.prototype.myfilter=function(callbackFn){
    let output =[];
    for(var i=0;i<this.length;i++){
        if(callbackFn.call(this,this[i],i,this)){
        output.push(this[i])
        }
    }
    return output;
}
console.log(arr.myfilter((val)=>val>3));

// let newArray = arr.filter(callback(currentValue[, index[, array]]) {
//      return element for newArray, if true
//   });