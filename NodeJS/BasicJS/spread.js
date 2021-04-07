console.log('Spread and Rest');
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
const persCopy = {...person};
console.log(persCopy);

// hobbies is refernce, pointer
const hobbies = ['Sports', 'Cooking'];

//const copiedArry = hobbies.slice(); //copy

//const copiedArry = [hobbies]; //array in array [ [ 'Sports', 'Cooking' ] ]
// const copiedArry = [...hobbies]; //spread operator ...pull out all elements, properties, etc and put it into []/something
// console.log(copiedArry);

// fixed args
// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// };

//rest operator, bundels args to array
const toArray = (...args) => {
    return args;
};


console.log(toArray(4, 5, 6, 7, 8));