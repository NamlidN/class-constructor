class Person {
    constructor(firstname, lastname, age) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.age = age;
  
    }
info(){
   return ["Hallo ich bin ", this.firstName, " ", this.lastName, " und ich bin ", this.age, " jahre alt."].join("");
    }
}

let A =new Person('dilman', 'namdar',22)
console.log(A.info());
