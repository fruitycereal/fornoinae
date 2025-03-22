document.addEventListener("DOMContentLoaded", function() {
  const bedImage = document.getElementById("bedImage");
  const searchResults = document.getElementById("searchResults");
  const picPopup = document.getElementById("picPopup");
  const ratPopup = document.getElementById("ratPopup");
  const passcodePopup = document.getElementById("passcodePopup");

  window.searchBed = function() {
      bedImage.style.display = "none";
      searchResults.style.display = "block";
  };

  window.showItem = function(item) {
      searchResults.style.display = "none";
      if (item === "pic") {
          picPopup.style.display = "block";
      } else if (item === "rat") {
          ratPopup.style.display = "block";
      } else if (item === "passcode") {
          passcodePopup.style.display = "block";
      }
  };

  window.closePopup = function(popupId) {
      document.getElementById(popupId).style.display = "none";
      searchResults.style.display = "block";
  };

  window.goBack = function() {
      window.location.href = "search.html";
  };
});