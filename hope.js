
let hopNumber = parseInt(prompt("Enter a number between 2 and 6:"));

while (isNaN(hopNumber) || hopNumber < 2 || hopNumber > 6) {
    hopNumber = parseInt(prompt("Please enter a valid number between 2 and 6:"));
}

for (let i = 1; i <= 200; i++) {
    if (i % hopNumber === 0) {
        console.log("hop");
    } else {
        console.log(i);
    }
}

alert("Check the console to see the hop game results!");
