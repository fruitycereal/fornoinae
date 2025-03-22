document.addEventListener("DOMContentLoaded", function() {
  const introText = document.getElementById("introText");
  const wakeUpMessage = document.getElementById("wakeUpMessage");
  const blackScreen = document.getElementById("blackScreen");
  const roomStart = document.getElementById("roomStart");

  function showClueMessage() {
    introText.textContent = "Don't forget any clues!";
    introText.style.opacity = 1;

    setTimeout(function () {
      introText.style.opacity = 0;
    }, 3000);

    setTimeout(function () {
      introText.style.display = "none";
      wakeUpMessage.style.display = "block";
      setTimeout(() => {
        wakeUpMessage.style.opacity = 1;
      }, 50);
    }, 4000);
  }

  // Click anywhere on the screen to proceed, even outside the text
  blackScreen.addEventListener("click", function () {
    if (wakeUpMessage.style.display === "block") {
      blackScreen.style.display = "none";
      roomStart.style.display = "flex"; // Display roomStart div

      // Center roomStart content
      roomStart.style.flexDirection = "column"; 
      roomStart.style.justifyContent = "center"; 
      roomStart.style.alignItems = "center";

      setTimeout(() => {
        roomStart.style.opacity = 1; // Fade in roomStart
      }, 50);
    }
  });

  // Now clicking anywhere in the roomStart will continue to the next step
  roomStart.addEventListener("click", function () {
    window.location.href = "flashlight.html";  // Proceed to the next page
  });

  showClueMessage();
});