// Load game progress from localStorage
localStorage.removeItem('gameProgress')
let gameProgress = JSON.parse(localStorage.getItem('gameProgress')) || {
    tableOpened: false,
    tableQuestionSolved: false,
    tablePasscode: null,
  };
  
  let correctAnswer = "3"; // Number of differences
  let cluePasscode = "THIRD 8";
  let clueFound = false;
  
  // Restore table state from localStorage on page load
  window.onload = function() {
    if (gameProgress.tableOpened) {
      document.getElementById('tableImageOpened').style.display = "block";
      document.getElementById('tableImageClosed').style.display = "none";
      document.getElementById('tablePage').querySelector('h2').textContent = "You searched the drawer and found something...";
  
      // If question already solved, show the result
      if (gameProgress.tableQuestionSolved) {
        document.getElementById('answerResult').innerHTML = `
          <p>You found a clue! Your passcode is: <strong> ${gameProgress.tablePasscode}</strong></p>
          <button onclick="continueNext()">Click to continue</button>
        `;
      } else {
        // Otherwise, show the question immediately
        showQuestion();
      }
    }
  };
  
  function saveProgress() {
    localStorage.setItem('gameProgress', JSON.stringify(gameProgress));
  }
  
  function openTable() {
    document.getElementById('tableImageOpened').style.display = "block";
    document.getElementById('tableImageClosed').style.display = "none";
    document.getElementById('tablePage').querySelector('h2').textContent = "You searched the drawer and found something...";
    gameProgress.tableOpened = true;
    saveProgress();
    showQuestion(); // Show question immediately when table is opened
  }
  
  function showQuestion() {
    if (clueFound || gameProgress.tableQuestionSolved) return; // Prevent showing multiple times
  
    clueFound = true;
    document.getElementById('questionContainer').style.display = "block";
    document.getElementById('questionText').innerHTML = `
      You found a clue! But to get it you have to answer a question:
      <br>
      <strong>How many differences are there in the picture?</strong>
    `;
    saveProgress();
  }
  
  function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim();
    const resultMessage = document.getElementById('answerResult');

    console.log("User Answer:", userAnswer); // Debugging
    console.log("Correct Answer:", correctAnswer); // Debugging
    console.log("User Answer Type:", typeof userAnswer); // Debugging
    console.log("Correct Answer Type:", typeof correctAnswer); // Debugging

    if (userAnswer === correctAnswer) {
      resultMessage.innerHTML = `
        <p>You found a clue! Your passcode is: <strong>${cluePasscode}</strong></p>
        <button onclick="continueNext()">Click to continue</button>
      `;
      gameProgress.tableQuestionSolved = true;
      gameProgress.tablePasscode = cluePasscode;
      saveProgress();
    } else {
      resultMessage.innerHTML = `<p>Wrong answer! Try again.</p>`;
      saveProgress();
    }
  }

  function continueNext() {
    window.location.href = "search.html";
  }
  
  function goBack() {
    window.location.href = "search.html";
  }