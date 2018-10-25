console.log('You are at ' + window.location);

let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

let colors = [
	"#d0021c",
	"#4990e2",
	"#4fe3c2"
]

let i = 0;

for (object of crypto) {
	let h1 = document.createElement('h1');
	h1.className = "h1";
	h1.innerHTML = object.name;
	document.body.appendChild(h1);
	
	let p = document.createElement('p');
	p.className = "p";
	p.innerHTML = object.price;
	document.body.appendChild(p);

	let div = document.createElement('div');
	div.className = "colorful";
	div.style.width = object.price + "px";
	div.style.backgroundColor = colors[i];
	document.body.appendChild(div);

	i++;
}