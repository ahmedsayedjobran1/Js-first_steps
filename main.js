let PlayerOne = document.querySelector("#p1-name").textContent;
let Playertwo = document.querySelector("#p2-name").textContent;
let Symbol1 = document.querySelector("#p1-symbol").textContent;
let Symbol2 = document.querySelector("#p2-symbol").textContent;
let squares = document.querySelectorAll(".square")
let Players = [{ Name: PlayerOne, Symbol: Symbol1 },
{ Name: Playertwo, Symbol: Symbol2 }]

Players.push({ Name: "NADA", Symbol: "O" }, { Name: "Ahmed", Symbol: "X" });
// Playertwo = Players[Players.length - 1].Name;
document.querySelector("#p2-name").textContent = Players[Players.length - 2].Name;
document.querySelector("#p1-name").textContent = Players[Players.length - 1].Name;
squares[0].textContent = "X"
squares[1].textContent = Players[1].Symbol;
squares[2].textContent = "X";
squares[5].textContent = Players[2].Symbol;
squares[4].textContent = Players[3].Symbol;
squares[8].textContent = Players[3].Symbol;

// console.log(Playertwo);
// Playertwo.textContent

// console.log(Playertwo);