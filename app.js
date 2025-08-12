console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");



for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log(i, "FIZZBUZZ");
    } else if (i % 3 === 0) {
        console.log(i, "FIZZ");
    } else if (i % 5 === 0) {
        console.log(i, "BUZZ");
    } else {
        console.log(i);
    }
}

//exercise 3 section

let x = 1;
while (x < 100) {
    if (x % 2 !== 0) {
        console.log(x);
    }
    x++;
}



do {
    if (x % 2 !== 0) {
        console.log(x);
    }

    x++;
} while (x < 100);


// fizz buzz with while and do while
let j = 1;
while (j <= 100) {
    if (j % 15 === 0) {
        console.log(j, "FIZZBUZZ");
    } else if (j % 3 === 0) {
        console.log(j, "FIZZ");
    } else if (j % 5 === 0) {
        console.log(j, "BUZZ");
    } else {
        console.log(j);
    }
    j++;
}

let k = 1;
do {
    if (k % 15 === 0) {
        console.log(k, "FIZZBUZZ");
    } else if (k % 3 === 0) {
        console.log(k, "FIZZ");
    } else if (k % 5 === 0) {
        console.log(k, "BUZZ");
    } else {
        console.log(k);
    }
    k++;
} while (k <= 100);






let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++) {
    if (i === value) {
        console.log(`Found ${value}`);
        break;
    }
    if (i == n) {
        console.log(`Not Found ${value} within 1-${n}..`);
    }
}








let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end; i++) {
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log(i, "FIZZBUZZ");
    } else if (i % fizzDivisor === 0) {
        console.log(i, "FIZZ");
    } else if (i % buzzDivisor === 0) {
        console.log(i, "BUZZ");
    } else {
        console.log(i);
    }
}
