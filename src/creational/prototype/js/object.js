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

const anotherPerson = Object.create(personPrototype);
anotherPerson.Firstname = "Berlan"
console.log(anotherPerson.fullName())