let money = parseFloat(prompt("Сколько у вас с собой денег?"));
let apples = parseInt(prompt("Сколько вы хотите яблок?"));
let bread = parseInt(prompt("Сколько вы хотите батонов хлеба?"));
let appleCost = parseFloat(prompt("Сколько стоит одно яблоко?"));
let breadCost = parseFloat(prompt("Сколько стоит один батон?"));

document.body.innerHTML = haveEnough(money, apples, bread, appleCost, breadCost);

function haveEnough(money, apples, bread, appleCost, breadCost) {
	let apCost = apples * appleCost;
	let brCost = bread * breadCost;
	return (money >= (apCost + brCost)) ? "Вам хватает денег на покупки" : "Вам не хватает";
}