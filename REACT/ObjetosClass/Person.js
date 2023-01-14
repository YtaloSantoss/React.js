class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    
    }
    greetings(){
        console.log("Olá, tudo bem? Meu nome é", this.name,", eu tenho", this.age, " anos de idade");
    }
}


module.exports = Person