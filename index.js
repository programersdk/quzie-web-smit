const jsQuiz = [
  {
    question: "1. What does 'this' refer to in JavaScript?",
    options: [
      "Refers to the global object",
      "Always refers to the window",
      "Always refers to null",
    ],
    correctAnswer: "Refers to the global object",
  },
  {
    question: "2. What is the difference between '==' and '===' in JavaScript?",
    options: [
      "No difference",
      "== compares values, === compares both value and type",
      "=== compares only value",
    ],
    correctAnswer: "== compares values, === compares both value and type",
  },
  {
    question: "3. What is a 'Closure' in JavaScript?",
    options: [
      "A function inside another function",
      "A function that can access its outer scope",
      "Only a global variable",
    ],
    correctAnswer: "A function that can access its outer scope",
  },
  {
    question: "4. Why is JavaScript called 'Asynchronous'?",
    options: [
      "Because it doesn’t execute immediately",
      "Because it executes one line at a time",
      "Because it can use callbacks, promises, and async/await",
    ],
    correctAnswer: "Because it can use callbacks, promises, and async/await",
  },
  {
    question: "5. What does 'Hoisting' mean in JavaScript?",
    options: [
      "Storing variables and functions in memory before execution",
      "Variables only run at the end",
      "Functions are never hoisted",
    ],
    correctAnswer: "Storing variables and functions in memory before execution",
  },
  {
    question: "6. What is the role of the 'Event Loop' in JavaScript?",
    options: [
      "Only handles errors",
      "Executes synchronous code",
      "Manages the Call Stack and Callback Queue",
    ],
    correctAnswer: "Manages the Call Stack and Callback Queue",
  },
  {
    question: "7. What is the purpose of 'Prototype' in JavaScript?",
    options: [
      "To implement inheritance",
      "To define variables",
      "To only handle the DOM",
    ],
    correctAnswer: "To implement inheritance",
  },
  {
    question: "8. What does a 'Promise' represent in JavaScript?",
    options: [
      "Just a function",
      "The result of an asynchronous operation that will resolve or reject in the future",
      "Always throws an error",
    ],
    correctAnswer:
      "The result of an asynchronous operation that will resolve or reject in the future",
  },
  {
    question: "9. What is the benefit of 'Strict Mode' in JavaScript?",
    options: [
      "Makes code faster",
      "Ignores errors",
      "Converts silent errors into proper errors",
    ],
    correctAnswer: "Converts silent errors into proper errors",
  },
  {
    question: "10. Why is 'async/await' used in JavaScript?",
    options: [
      "To write asynchronous code like synchronous code",
      "Only for loops",
      "Only for arrays",
    ],
    correctAnswer: "To write asynchronous code like synchronous code",
  },
];

let currentQuestionIndex = 0;
let score = 0;
nextQuestion()
function nextQuestion() {
  if (currentQuestionIndex < jsQuiz.length) {
    let questionElement = document.getElementById("quisten");
    let optionElement = document.getElementById("Option");
    questionElement.innerHTML = jsQuiz[currentQuestionIndex].question;
    optionElement.innerHTML = "";

    for (let i = 0; i < jsQuiz[currentQuestionIndex].options.length; i++) {
      optionElement.innerHTML += `<li class="list" onclick="checkAnswer(event)"> ${jsQuiz[currentQuestionIndex].options[i]}</li>`;
    }
  } else {
   
    showResultPopup();
  }
}


function checkAnswer(event) {
  let listItems = document.querySelectorAll(".list");
  const selectedAnswer = event.target.innerText.trim();
  const correctAnswer = jsQuiz[currentQuestionIndex].correctAnswer.trim();


  listItems.forEach((item) => {
    item.onclick = null;
  });

 
  if (selectedAnswer === correctAnswer) {
    event.target.style.backgroundColor = "green";
    score += 10;
    console.log("Correct! Score:", score);
  } else {
    event.target.style.backgroundColor = "red";
    console.log("Wrong!");
    
    for (let item of listItems) {
      if (item.innerText.trim() === correctAnswer) {
        item.style.backgroundColor = "green";
      }
    }
  }
    currentQuestionIndex++;
}


function showResultPopup() {
  const popupContainer = document.getElementById("popup-container");
  const popupContent = document.querySelector(".popup-content");

  popupContent.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your final score is: ${score} out of ${jsQuiz.length * 10}</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
  `;

  popupContainer.style.display = "flex";
}


function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  closePopup();
  nextQuestion();
}


function closePopup() {
  const popupContainer = document.getElementById("popup-container");
  popupContainer.style.display = "none";
}
