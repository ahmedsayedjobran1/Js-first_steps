let statement = document.getElementById("statement");
let optionButtons = document.querySelectorAll("button");
let explanation = document.getElementById("explanation");
console.log(statement.textContent);

//  let's make it 
let fact = {
    "statement": "'1' + '1' ==='2'",
    "answer": "false",
    "explanation": "the plus operator does not work by this way, so '1'+ '1' ==='11'"
}

let o = {
    prop: "test it please"
}
console.log();