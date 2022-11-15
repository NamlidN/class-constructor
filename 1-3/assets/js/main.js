

function asdf(event){
    event.preventDefault();

class Person {


    constructor(firstname, age) {
        this.firstName = firstname;
 
        this.age = age;
  
    }
info(){
   return [ this.firstName, " "," ", this.age, " jahre alt."].join("");
    }
}
let age = document.getElementById('age').value;
let firstName = document.getElementById('name').value 
let A =new Person(firstName,age)
let ul = document.getElementById('result')
let pass = document.getElementById('examCheck').checked
if (pass){
    ul.innerHTML ="<span style='color: red;'>"+A.info()+"</span>"

}if (!pass){
   ul.innerHTML = A.info()
    
}
}
