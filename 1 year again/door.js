// Load game progress from localStorage
/*let gameProgress = JSON.parse(localStorage.getItem('gameProgress')) || {
    lockerOpened: false,
    lockerQuestionSolved: false,
    lockerPasscode: null,
  };
  */

  let correctAnswer = "738594";
  let clueFound = false;
  
  // Restore locker state from gameProgress
  window.onload = function() {
      if (gameProgress.lockerOpened) {
          document.getElementById('lockerImageOpened').style.display = "block";
          document.getElementById('lockerImageClosed').style.display = "none";
          document.getElementById('questionContainer').style.display = gameProgress.lockerQuestionSolved ? "block" : "none";
          if (gameProgress.lockerQuestionSolved) {
              document.getElementById('answerResult').innerHTML = `<strong> OMG YOU FOUND YOUR WAY OUT </strong> <button onclick="continueNext()">Click to continue</button>`;
          }
      }
  };
  
  function saveProgress() {
      localStorage.setItem('gameProgress', JSON.stringify(gameProgress));
  }
  
  function openLocker() {
      document.getElementById('lockerImageOpened').style.display = "block";
      document.getElementById('lockerImageClosed').style.display = "none";
      document.getElementById('lockerPage').querySelector('h2').textContent = "Uh oh it's locked";
      gameProgress.lockerOpened = true;
      saveProgress();
  }
  
  function showQuestion() {
      if (clueFound) return;
  
      clueFound = true;
      document.getElementById('questionContainer').style.display = "block";
      document.getElementById('questionText').innerHTML = `
          <strong>Find the passcode to unlock the door</strong>
          <br>
          Look around for clues!
      `;
      saveProgress();
  }
  
  function checkAnswer() {
      const userAnswer = document.getElementById('answerInput').value.trim();
      const resultMessage = document.getElementById('answerResult');
  
        if (userAnswer === correctAnswer) {
            resultMessage.innerHTML = `
                <div class="result-message">
                    <strong>OMG YOU FOUND YOUR WAY OUT</strong>
                    <button onclick="continueNext()">GET OUT</button>
                </div>
            `;
            gameProgress.lockerQuestionSolved = true;
            gameProgress.lockerPasscode = cluePasscode;
            saveProgress();
        } else {
            resultMessage.innerHTML = `
                <p>Wrong answer! Try again.</p>
            `;
            saveProgress();
        }
        
  }
  
  function continueNext() {
      window.location.href = "final.html";
  }
  
  function goBack() {
      window.location.href = "search.html";
  }