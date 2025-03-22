// Load game progress from localStorage
/*let gameProgress = JSON.parse(localStorage.getItem('gameProgress')) || {
    lockerOpened: false,
    lockerQuestionSolved: false,
    lockerPasscode: null,
  };
  */

  let correctAnswer = "6040";
  let cluePasscode = "ONE 7"; // Changed passcode
  let clueFound = false;
  
  // Restore locker state from gameProgress
  window.onload = function() {
      if (gameProgress.lockerOpened) {
          document.getElementById('lockerImageOpened').style.display = "block";
          document.getElementById('lockerImageClosed').style.display = "none";
          document.getElementById('questionContainer').style.display = gameProgress.lockerQuestionSolved ? "block" : "none";
          if (gameProgress.lockerQuestionSolved) {
              document.getElementById('answerResult').innerHTML = `<p>You found a clue! Your passcode is: <strong>SIX ${gameProgress.lockerPasscode}</strong></p><button onclick="continueNext()">Click to continue</button>`;
          }
      }
  };
  
  function saveProgress() {
      localStorage.setItem('gameProgress', JSON.stringify(gameProgress));
  }
  
  function openLocker() {
      document.getElementById('lockerImageOpened').style.display = "block";
      document.getElementById('lockerImageClosed').style.display = "none";
      document.getElementById('lockerPage').querySelector('h2').textContent = "You found a lock!";
      gameProgress.lockerOpened = true;
      saveProgress();
  }
  
  function showQuestion() {
      if (clueFound) return;
  
      clueFound = true;
      document.getElementById('questionContainer').style.display = "block";
      document.getElementById('questionText').innerHTML = `
          In order to get the clue inside the locker, you have to unlock it
          <br>
          <strong>Unlock the locker combination (ur bd year + ur gfs bd year + the year you guys started dating)</strong>
      `;
      saveProgress();
  }
  
  function checkAnswer() {
      const userAnswer = document.getElementById('answerInput').value.trim();
      const resultMessage = document.getElementById('answerResult');
  
      if (userAnswer === correctAnswer) {
          resultMessage.innerHTML = `
              <p>You found a clue! Your passcode is: <strong>${cluePasscode}</strong></p>
              <button onclick="continueNext()">Click to continue</button>
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
      window.location.href = "search.html";
  }
  
  function goBack() {
      window.location.href = "search.html";
  }