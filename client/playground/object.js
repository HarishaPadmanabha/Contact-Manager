const person = {
    name: 'Rahul', 
    greet: function(){
        return 'Hello my name is ' + this.name
    }
}

console.log(person.greet()) // 'Hello my name is Rahul' 

const sayName = person.greet 

console.log(sayName()) // 'Hello my name is undefined' 
// bind methods help to set the context of the this keyword inside a function
// what gets passed to the bind method, will now become the value of the this keyword
console.log(sayName.bind(person)())

function sayHello() {
    return 'hello my name is ' + this.name 
}

console.log(sayHello.bind({ name: 'me' })())