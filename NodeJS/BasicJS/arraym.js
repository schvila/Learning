console.log('Arrays and Array methods');

// hobbies is refernce, pointer
const hobbies = ['Sports', 'Cooking'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }
console.log(hobbies.map(hobby=> 'Hobby: '+hobby)); //returns modified copy
console.log(hobbies); // orriginal array
hobbies.push('Programming');
console.log(hobbies); //reference not changed
