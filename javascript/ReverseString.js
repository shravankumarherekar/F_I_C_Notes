function reverseString(str){
let newstr=[];
let str1=str.split(' ');
for(let i=0;i<str1.length;i++){
    newstr.push(str1[i].split('').reverse().join(''));
}
return newstr.join(' ');
}

console.log(reverseString('shravan kumar herekar'));