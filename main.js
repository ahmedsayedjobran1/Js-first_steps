let statement = document.getElementById("statement");
let optionButtons = document.querySelectorAll("button");
let explanation = document.getElementById("explanation");
console.log(statement.textContent);

//  let's make it 
let fact1 = {
    "statement": "typeof(array) === array?",
    "answer": true,
    "explanation": "no arrays type isn't array"
}

statement.textContent = fact1["statement"];

