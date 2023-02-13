/* Exercise 2 - True or false
Using prompt, variables and conditionals, ask questions to the users and display the result on the console.

Ask: "Tomatoes are fruits, not vegetables: true or false". If that answer is "true" you show "correct", otherwise show "incorrect".
Ask: "You should drink 8 glasses of water: true or false". If that answer is "false" you show "correct", otherwise show "incorrect".
Ask: "Fishes have only three seconds of memory: true or false". If that answer is "false" you show "correct", otherwise show "incorrect".
Ask: "The Great Wall of China is the only man made structure visible from space The Great Wall of China: true or false". If that answer is "true" you show "correct", otherwise show "incorrect".
Have fun! Create more true or false questions.

Bonus points

Create a variable points and initialize it to zero.
If the answer is correct, add 10 points to the points variable.
If the answer is incorrect, remove 5 points to the points variable.
Display how many points the user has on the console.
 */

// Gets user input

const R1 = prompt("Tomatoes are fruits, not vegetables: true or false");
const R2 = prompt("You should drink 8 glasses of water: true or false");
const R3 = prompt("Fishes have only three seconds of memory: true or false");
const R4 = prompt(
  "The Great Wall of China is the only man made structure visible from space The Great Wall of China: true or false"
);

function myFunction(R) {
  {
    if (R1 === "true") {
      console.log("correct");
    } else if (R1 !== "true") {
      console.log("incorrect");
    }
  }
  {
    if (R2 === "true") {
      console.log("correct");
    } else if (R2 !== "true") {
      console.log("incorrect");
    }
  }
  {
    if (R3 === "false") {
      console.log("correct");
    } else if (R3 !== "false") {
      console.log("incorrect");
    }
  }
  {
    if (R4 === "true") {
      console.log("correct");
    } else if (R4 !== "true") {
      console.log("incorrect");
    }
  }
}
myFunction();
