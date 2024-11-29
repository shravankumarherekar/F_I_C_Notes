const promise=new Promise((resolve,reject)=>{
    if(num>6){
       resolve('promise resolved')
    }
    else{
        reject('rejected');
    }
})