let PlayerOne = document.querySelector("#p1-name").textContent;
let Playertwo = document.querySelector("#p2-name").textContent;
let Symbol1 = document.querySelector("#p1-symbol").textContent;
let Symbol2 = document.querySelector("#p2-symbol").textContent;

let Players = [{ Name: PlayerOne, Symbol: Symbol1 },
{ Name: Playertwo, Symbol: Symbol2 }]

Players.push({ Name: "NADA", Symbol: "O" }, { Name: "Ahmed", Symbol: "X" });
// Playertwo = Players[Players.length - 1].Name;
document.querySelector("#p2-name").textContent = Players[Players.length - 2].Name;
document.querySelector("#p1-name").textContent = Players[Players.length - 1].Name;

// console.log(Playertwo);
// Playertwo.textContent

// console.log(Playertwo);