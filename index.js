let Q1 = "Tomatoes are fruits, not vegetables: true or false";
let Q2 = "You should drink 8 glasses of water: true or false";
let Q3 = "Fishes have only three seconds of memory: true or false";
let Q4 =
  "The Great Wall of China is the only man made structure visible from space The Great Wall of China: true or false";

function answerOfQ1(IsTrue) {
  if (IsTrue) {
    return "correct";
  }
  {
    return "incorrect";
  }
}

function answerOfQ2(IsTrue) {
  if (IsTrue) {
    return "correct";
  }
  return "incorrect";
}

function answerOfQ3(IsTrue) {
  if (IsTrue) {
    return "correct";
  }
  return "incorrect";
}

function answerOfQ4(IsTrue) {
  if (IsTrue) {
    return "correct";
  }
  return "incorrect";
}

answerOfQ1(true);
answerOfQ1(false);
console.log(answerOfQ1(true));
console.log(answerOfQ1(false));

answerOfQ1(true);
answerOfQ1(false);
console.log(answerOfQ2(true));
console.log(answerOfQ2(false));

answerOfQ1(true);
answerOfQ1(false);
console.log(answerOfQ3(true));
console.log(answerOfQ3(false));

answerOfQ1(true);
answerOfQ1(false);
console.log(answerOfQ3(true));
console.log(answerOfQ3(false));
