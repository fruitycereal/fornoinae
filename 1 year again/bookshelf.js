// Load game progress from localStorage
/* let gameProgress = JSON.parse(localStorage.getItem('gameProgress')) || {
    bookshelfOpened: false,
    bookshelfQuestionSolved: false,
    bookshelfPasscode: null,
}; */

let correctAnswer = "eggy";
let cluePasscode = "FOUR 5";
let clueFound = false;
let correctBook = Math.floor(Math.random() * 9) + 1; // 9 books

// Restore bookshelf state from gameProgress
window.onload = function() {
    if (gameProgress.bookshelfOpened) {
        document.getElementById('bookshelfImageClosed').style.display = "none";
        document.getElementById('bookshelfImageOpened').style.display = "block";
        document.getElementById('booksContainer').style.display = gameProgress.bookshelfQuestionSolved ? "none" : "flex";
        document.getElementById('questionContainer').style.display = gameProgress.bookshelfQuestionSolved ? "block" : "none";
        if (gameProgress.bookshelfQuestionSolved) {
            document.getElementById('answerResult').innerHTML = `<p>You found a clue! Your passcode is: <strong>${gameProgress.bookshelfPasscode}</strong></p><button onclick="continueNext()">Click to continue</button>`;
        }
    }
};

// Save game progress to localStorage
function saveProgress() {
    localStorage.setItem('gameProgress', JSON.stringify(gameProgress));
}

// Open the bookshelf to view the zoomed-in image
function openBookshelf() {
    document.getElementById('bookshelfImageClosed').style.display = "none";
    document.getElementById('bookshelfImageOpened').style.display = "block";
    document.getElementById('clueMessage').innerHTML = "Click on one of the books to search!";
    document.getElementById('booksContainer').style.display = "flex";
    gameProgress.bookshelfOpened = true;
    saveProgress();
}

// Open the book and search for a clue
function openBook(bookNumber) {
    if (clueFound) return;

    if (bookNumber === correctBook) {
        clueFound = true;
        document.getElementById('booksContainer').style.display = "none";
        document.getElementById('questionContainer').style.display = "block";
        document.getElementById('questionText').innerHTML = `
            You found a clue! But to get it you have to answer a question:
            <br>
            <strong> What game did you always play with your girlfriend in April 2024? </strong>
        `;
        document.getElementById('clueMessage').innerHTML = "";
        saveProgress();
    } else {
        document.getElementById('clueMessage').innerHTML = "Nothing here, keep searching!";
        saveProgress();
    }
}

// Check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim().toLowerCase();
    const resultMessage = document.getElementById('answerResult');

    if (userAnswer === correctAnswer) {
        resultMessage.innerHTML = `
            <p>You found a clue! Your passcode is: <strong>${cluePasscode}</strong></p>
            <button onclick="continueNext()">Click to continue</button>
        `;
        gameProgress.bookshelfQuestionSolved = true;
        gameProgress.bookshelfPasscode = cluePasscode;
        saveProgress();
    } else {
        resultMessage.innerHTML = `
            <p>Wrong answer! Try again.</p>
        `;
        saveProgress();
    }
}

// Continue to the next part of the game
function continueNext() {
    window.location.href = "search.html";
}

// Go back to the search page
function goBack() {
    window.location.href = "search.html";
}