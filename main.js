const me = {
    name: "Ahmed",
    age: 21,
    gender: "female"
}
Object.freeze(me); // this is going to change it to none thing 
me.age = 35;  // this is not going to change any thing you will change 
me.name = "hani";  // this is not going to change any thing you will change 
console.log(me);