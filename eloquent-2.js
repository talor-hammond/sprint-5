// LOOPING A TRIANGLE --
for (let hash = "#"; hash.length < 8; hash += "#") {
    console.log(hash);
}

// FIZZBUZZ --
for (var number = 1; number <= 100; number++) {
    
    var string = "";

    if (number % 3 === 0) string += "Fizz";
    if (number % 5 === 0) string += "Buzz";

    console.log(number || string);

}


// CHESS BOARD --

// -- GLOBAL VARIABLES:
let gridSize = 10;
let squares = "";

for (let i = 0; i < gridSize; i++) { // counting across...

  for (let j = 0; j < gridSize; j++) { // counting gridSize for each square counted above (running along index)

    var count = i + j;

    if ((count) % 2 == 0) { // i.e. even number'd square
      squares += " ";
    } else { // i.e. odd number'd square
      squares += "#";
    }

  }

  squares += "\n"; // line break at each end of initial "for" loop (i.e. at end of gridSize.length across)

}

console.log(squares);