console.log('Destructuring');
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
// const printName = (persData) =>{
//     console.log(persData.name);
// }

// destruct
const printName = ({name, age}) =>{
    console.log(name+' '+age);
}
//printName(person);
const {name, age} = person; // by name
console.log(name+' '+age);

const hobbies = ['Sports', 'Cooking'];
const[hoby1, hoby2] = hobbies; // by position
console.log(hoby1, hoby2); // no array
