let i = 0;
while(i <= 2){
	console.log("I am starting to feel a little loopy");
	i++;
}

let i = 0;
while(i <= 20){
	if(i%2 == 0){
		console.log(`${i} is even`)
	}else {
		console.log(`${i} is odd`)
	}
	i++;
}

let i = 0;
while(i <= 10){
	console.log(i * 9);
	i++;
}

let i = 36;
while(i > 1){
	console.log(i/2);
	i /= 2;
}

let shelf = 0;
let shelfLimit = 80;
while(shelf <= shelfLimit){
	shelf++;
	console.log(`There is room for only ${shelfLimit - shelf}`);
}
