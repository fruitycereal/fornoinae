// Load game progress from localStorage
/*let gameProgress = JSON.parse(localStorage.getItem('gameProgress')) || {
    cabinetOpened: false,
    cabinetQuestionSolved: false,
    cabinetPasscode: null,
  };
  */

  let correctAnswer = "feather";
  let cluePasscode = "SIX 4";
  let clueFound = false;
  let correctCircle = Math.floor(Math.random() * 3) + 1;
  
  // Restore cabinet state from gameProgress
  window.onload = function() {
    if (gameProgress.cabinetOpened) {
      document.getElementById('cabinetImage').src = "opened-cabinet.jpg";
      document.getElementById('circlesContainer').style.display = gameProgress.cabinetQuestionSolved ? "none" : "flex"; //hide circles if question solved
      document.getElementById('questionContainer').style.display = gameProgress.cabinetQuestionSolved ? "block" : "none";
      if (gameProgress.cabinetQuestionSolved) {
        document.getElementById('answerResult').innerHTML = `<p>You found a clue! Your passcode is: <strong> ${gameProgress.cabinetPasscode}</strong></p><button onclick="continueNext()">Click to continue</button>`;
      }
    }
  };
  
  function saveProgress() {
    localStorage.setItem('gameProgress', JSON.stringify(gameProgress));
  }
  
  function openCabinet() {
    document.getElementById('cabinetImage').src = "opened-cabinet.jpg";
    document.getElementById('clueMessage').innerHTML = "Click on one of the circles to search!";
    document.getElementById('circlesContainer').style.display = "flex";
    gameProgress.cabinetOpened = true;
    saveProgress();
  }
  
  function openClue(clueNumber) {
    if (clueFound) return;
  
    if (clueNumber === correctCircle) {
      clueFound = true;
      document.getElementById('circlesContainer').style.display = "none";
      document.getElementById('questionContainer').style.display = "block";
      document.getElementById('questionText').innerHTML = `
        You found a clue! But to get it you have to answer a question:
        <br>
        <strong>I am easy to lift, but hard to throw. What am I?</strong>
      `;
      document.getElementById('clueMessage').innerHTML = "";
      saveProgress();
    } else {
      document.getElementById('clueMessage').innerHTML = "Nothing here, keep searching!";
      saveProgress();
    }
  }
  
  function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim().toLowerCase();
    const resultMessage = document.getElementById('answerResult');
  
    if (userAnswer === correctAnswer) {
      resultMessage.innerHTML = `
        <p>You found a clue! Your passcode is: <strong>${cluePasscode}</strong></p>
        <button onclick="continueNext()">Click to continue</button>
      `;
      gameProgress.cabinetQuestionSolved = true;
      gameProgress.cabinetPasscode = cluePasscode;
      saveProgress();
    } else {
      resultMessage.innerHTML = `
        <p>Wrong answer! Try again.</p>
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