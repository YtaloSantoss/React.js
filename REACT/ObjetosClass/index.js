const Person = require('./Person')
const Alumn = require('./Alumn')



let joao = new Person("joao", 20);
let igor = new Person("Igor", 17);
let marcos = new Alumn("Marcos",30,"1001");


joao.greetings()
igor.greetings()
marcos.greetings()