function person(fname,lname){
this.firstname=fname;
this.lastname=lname;
}
function person(fname,lname){
    this.firstname=fname;
    this.lastname=lname;
}
const person1=new person ('shravan',"herekar")
const person1=new person('shravan','herekar');
const person2=new person('shravan','kumar');

person.prototype.getfullname=function(){
    return this.firstname+" "+this.lastname;
};
console.log(person1.getfullname());;

///

let object={
    name:'shravan',
    city:'shankerpally',
    getinfo:function(){
        console.log(this.name +" "+ this.city);
    }
}

let object2={
    name:'shravan2'
}

object2.__proto__=object;

console.log(object2.city);