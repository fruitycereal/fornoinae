function pickUpFlashlight() {
    disableButtons();
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.innerHTML = `
      <p>You picked up the flashlight and turned it on.</p>
      <button onclick="continueNext()">Click to continue</button>
    `;
  }
  
  function ignoreFlashlight() {
    disableButtons();
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.innerHTML = `
      <p>You obviously need a flashlight to explore around, duh.</p>
      <p>You picked up the flashlight and turned it on.</p>
      <button onclick="continueNext()">Click to continue</button>
    `;
  }
  
  function continueNext() {
    window.location.href = "search.html"; // The next page
  }
  
  function disableButtons() {
    document.getElementById('pickBtn').disabled = true;
    document.getElementById('ignoreBtn').disabled = true;
  }
  