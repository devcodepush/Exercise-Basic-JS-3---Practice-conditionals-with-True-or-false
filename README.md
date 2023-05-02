## Exercise Basic JS 3 - Practice conditionals with True or false

### GitHub Page => Click [HERE](https://devcodepush.github.io/Exercise-Basic-JS-3---Practice-conditionals-with-True-or-false/) to see the Page!

##### Using prompt, variables and , ask questions to the users and display the result on the console.

##### Task 1 => Ask: "Tomatoes are fruits, not vegetables: true or false". If that answer is "true" you show "correct", otherwise show "incorrect".

##### Task 2 => Ask: "You should drink 8 glasses of water: true or false". If that answer is "false" you show "correct", otherwise show "incorrect".

##### Task 3 => Ask: "Fishes have only three seconds of memory: true or false". If that answer is "false" you show "correct", otherwise show "incorrect".

##### Task 4 => Ask: "The Great Wall of China is the only man made structure visible from space The Great Wall of China: true or false". If that answer is "true" you show "correct", otherwise show "incorrect".

### Note
🚨 Don’t forget to create a new repository for that, and submit the URL to your repo here in the google classroom assignment before next Monday 6h.

### Bonus points
Create a variable points and initialize it to zero.If the answer is correct, add 10 points to the points variable.If the answer is incorrect, remove 5 points to the points variable.Display how many points the user has on the console.

### Solution

```javascript
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
```
