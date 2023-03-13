// objects

const js = {
    name: "JavaScript",
    abbrevation: "JS",
    isAwesome: true,
    officialSpec: "EcmaScript",
    birthYear: 1995,
    creator: "Brenden Eich "
}

console.log(js.abbrevation);// this  is going to give us the apprevation
console.log(js.isAwesome) // this is going to print out the value of the isAwesome boelen value
console.log(js.creator + "His real name is ahmed")  // this is going to print out the value of the print out value 
console.log(js["birthYear"])  // this is going to give us the birthyear which you are born in 
console.log(js.name.startsWith("Java"));
let age = 2023 - (js.birthYear);
console.log(age); // awesome js has 28 years old 
