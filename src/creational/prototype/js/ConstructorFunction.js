const personPrototype={
    Firstname: 'Benevanio',
    LastName: "Santos",    
    age: 27,
    sex: "Male",
    telephone: "19878787848",
    fullName(){
        return `${this.Firstname} ${this.LastName}`
    }
}
function Person(Firstname,LastName , age){
this.Firstname = Firstname;
this.LastName = LastName;
    this.age = age;
}

Person.prototype = Object.create(personPrototype);

const person1 = new Person("Benevanio", "Santos", 27);
console.log(person1.fullName());

