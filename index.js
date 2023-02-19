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

//name varriables are changed with more INFORMATIVE names >> responseOne instead of R1 , responseTwo
//and responseThree instead of R3.

const responseOne = prompt(
  "Tomatoes are fruits, not vegetables: true or false"
);
const responseTwo = prompt(
  "You should drink 8 glasses of water: true or false"
);
const responseThree = prompt(
  "Fishes have only three seconds of memory: true or false"
);
const responseFour = prompt(
  "The Great Wall of China is the only man made structure visible from space The Great Wall of China: true or false"
);

//this function doesn't need a parameter, so you can remove it.
//You have put a "R" parameter but you never use it
// you just have 2: this or that. So a super simple if and else pattern is all you need
// if with else if is useful when having more than 2 scenarios!

function responseChecker() {
  if (responseOne === "true") {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
  if (responseTwo === "true") {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
  if (responseThree === "false") {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
  if (responseFour === "true") {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
}

responseChecker();
