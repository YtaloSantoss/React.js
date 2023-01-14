const Person = require('./Person')

class Alumn extends Person {

    constructor(name, age, turma) {
        super(name, age)
        this.turma = turma;
    }
    greetings(){
        console.log("Olá, tudo bem? Meu nome é", this.name,", eu tenho", this.age, " anos de idade",this.turma, " turma");
    }
}


module.exports = Alumn