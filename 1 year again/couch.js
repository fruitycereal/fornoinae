// Load game progress from localStorage
/*let gameProgress = JSON.parse(localStorage.getItem('gameProgress')) || {
    cabinetOpened: false,
    cabinetQuestionSolved: false,
    cabinetPasscode: null,
  };
  */
 
let correctAnswer = ".... --- .-.. .-.. -.--";  // Example answer: "What color is the cushion with the clue?" — adjust as you like
let cluePasscode = "TWO 3";
let clueFound = false;
let questionShown = false;

function searchCouch() {
    document.getElementById('couchImage').style.display = "none";
    document.getElementById('cushionsContainer').style.display = "block";
}

function checkCushion(hasClue) {
    const cushionResult = document.getElementById('cushionResult');
    cushionResult.innerHTML = ""; // Clear previous results

    if (hasClue && !questionShown) {
        // Show the question if they clicked the correct cushion
        questionShown = true;
        showQuestion();
    } else if (hasClue && questionShown) {
        cushionResult.innerHTML = `<p>You already found the clue! Answer the question below.</p>`;
    } else {
        cushionResult.innerHTML = `<p>Nothing found! Try the other cushion.</p>`;
    }
}

function showQuestion() {
    document.getElementById('questionContainer').style.display = "block";
    document.getElementById('questionText').innerHTML = `
        You found a hidden clue! But first, answer this question:
        <br>
        <strong> Write your girlfriend’s nickname in morse code (no caps) </strong>
    `;
    saveProgress();
}

function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim();
    const resultMessage = document.getElementById('answerResult');
  
    if (userAnswer === correctAnswer) {
      resultMessage.innerHTML = `
        <p style="color: red;"> You found a clue! Your passcode is: <strong>${cluePasscode}</strong></p>
        <button onclick="continueNext()">Click to continue</button>
      `;
      gameProgress.cabinetQuestionSolved = true;
      gameProgress.cabinetPasscode = cluePasscode;
      saveProgress();
    } else {
      resultMessage.innerHTML = `
        <p style="color: red;">r u even her real gf... try again </p>
      `;
      saveProgress();
    }
  }
function continueNext() {
    window.location.href = "search.html";
}

function goBack() {
    window.location.href = "search.html";
}
