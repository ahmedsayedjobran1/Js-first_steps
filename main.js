

// change the palyers  name to you&neighbor
document.getElementById("p1-name").textContent = "Ahmed";
document.getElementById("p2-name").textContent = "Ashraf";
// swap the players symbols
Ahmed = document.querySelector("#p1-symbol");
Ashraf = document.querySelector("#p2-symbol");

Ahmed.textContent = "O";
Ashraf.textContent = "X";

document.querySelector("h2").textContent = "A game you know and  love "