console.log('Understanding arrow functions');

const name = 'Max';
let age = 29;
const hasHobbies = true;

/* old way
function sumarizeUser(name, age, hasHobby){
    return 'Name = ' + name + ' age = ' + age + ' has hobby: ' + hasHobby;
}
*/
const sumarizeUser = (name, age, hasHobby) => {
    return 'Name = ' + name + ' age = ' + age + ' has hobby: ' + hasHobby;
}

const addRandom = () => 3*5; // no args
console.log(addRandom());

const addThree = a => a+3; // no parentheses
console.log(addThree(2));

const add = (a, b) => a+b; //only returns value
console.log(add(3,4));

//console.log(sumarizeUser(name, age, hasHobbies));