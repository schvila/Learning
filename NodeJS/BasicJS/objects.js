console.log("Working with Objects, Props and Methods");

const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(person);
person.greet();