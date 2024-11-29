let string ="shravan";

function swapfandl(str){
   let output =str.split('');
   let temp=output[0];
   output[0]=output[output.length-1];
   output[output.length-1]=temp;
   return output.join('');
}

console.log(swapfandl(string))

function swapp(str){
    if (str.length<2){
        return str;
    }
    return str.charAt(str.length-1) +str.substring(1,str.length-1)+str.charAt(0)
}

console.log(swapp('j'))