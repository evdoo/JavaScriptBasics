let money = parseFloat(prompt("Сколько у вас с собой денег?"));
let apples = parseInt(prompt("Сколько вы купили яблок?"));
let bread = parseInt(prompt("Сколько вы купили батонов хлеба?"));
let applesCost = parseFloat(prompt("Сколько стоит одно яблоко?")) * apples;
let breadCost = parseFloat(prompt("Сколько стоит один батон?")) * bread;
let compare = money >= (applesCost + breadCost);
document.body.innerHTML = compare;