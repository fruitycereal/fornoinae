document.addEventListener("DOMContentLoaded", function() {
    const introText = document.getElementById("introText");
    const introTextContainer = document.getElementById("introTextContainer");
    const otterContainer = document.getElementById("otterContainer");
    const otterImage = document.getElementById("otterImage");
    const otterText = document.getElementById("otterText");
    const otter1Container = document.getElementById("otter1Container");
    const otter1Image = document.getElementById("otter1Image");
    const choicesContainer = document.getElementById("choicesContainer");
    const questionText = document.getElementById("questionText");
    const userTextbox = document.getElementById("userTextbox");
    const userInput = document.getElementById("userInput");
    const resultText = document.getElementById("resultText");
    const endGameButton = document.getElementById("endGameButton");

    const fadeTexts = [
        "You hurriedly find your way out",
        "But all of the sudden...",
        "During your way out...",
        "You meet your girlfriend?.."
    ];

    document.getElementById("userInput").readOnly = true;

    document.getElementById("userInput").disabled = true;

    let currentIndex = 0;

    function fadeTextInAndOut(text) {
        introText.textContent = text;
        introText.style.opacity = 1;

        setTimeout(() => {
            introText.style.opacity = 0;
        }, 4000);
    }

    function showFadeInText() {
        if (currentIndex < fadeTexts.length) {
            fadeTextInAndOut(fadeTexts[currentIndex]);
            currentIndex++;
            setTimeout(showFadeInText, 4000);
        } else {
            // Delay the otter appearance until the last fade out is complete
            setTimeout(showOtter1Segment, 2000); // 2000 milliseconds (2 seconds) after the last text fades
        }
    }

    function showOtter1Segment() {
        otter1Container.style.display = "flex";
        otter1Image.style.opacity = 0; // Ensure it starts with opacity 0
        setTimeout(() => {
            otter1Image.style.opacity = 1; // Fade in
        },10); // small delay to make sure the opacity 0 is applied

        setTimeout(() => {
            otter1Image.style.opacity = 0;
            setTimeout(() => {
                otter1Container.style.display = "none";
                showOtterSegment();
            }, 1000);
        }, 3000);
    }
    
    function showOtterSegment() {
        otterContainer.style.display = "flex";
        otterImage.style.opacity = 1;
        otterText.style.opacity = 1;
        questionText.style.display = "block";
        choicesContainer.style.display = "block";
    }

    function moveOtterRight() {
        otterContainer.style.justifyContent = "flex-end";  // Move otter to the right
        otterImage.style.transform = "scale(1)"; // Keep otter in original size on the right side
    }

    window.chooseIhateYou = function() {
        showTextbox("I hate you, why don’t you just go die?");
        otterImage.src = "madotter.png";
        setTimeout(() => {
            otterText.textContent = "...you're gonna die instead";
            resultText.textContent = "You died";
            resultText.style.display = "inline-block";
        }, 2000);
    
        disableChoices();
        endGameButton.style.display = "block";  // Add end game button here
    };
    
    window.chooseWhy = function() {
        showTextbox("Honey, why did you have to do this?");
        setTimeout(() => {
            otterText.textContent = "Cause you don’t love me enough";
            otterImage.src = "madotter.png";
            resultText.textContent = "Your gf left you";
            resultText.style.display = "inline-block";
        }, 2000);
    
        disableChoices();
        endGameButton.style.display = "block";  // Add end game button here
    };
    
    window.chooseILoveYou = function() {
        showTextbox("I love you babe");
        otterImage.src = "madotter.png";
        setTimeout(() => {
            otterText.textContent = "Liar";
            resultText.textContent = "Your gf left you";
            resultText.style.display = "inline-block";
        }, 2000);
    
        disableChoices();
        endGameButton.style.display = "block";  // Add end game button here
    };    

    window.chooseSorry = function() {
        showTextbox("Babe, I’m sorry for everything");
        setTimeout(() => {
            otterText.textContent = "Do you promise to do better?";
            choicesContainer.innerHTML = '';

            const yesButton = document.createElement('button');
            yesButton.textContent = "Yes";
            yesButton.onclick = function() { handleSorryChoice("yes"); };

            const noButton = document.createElement('button');
            noButton.textContent = "No";
            noButton.onclick = function() { handleSorryChoice("no"); };

            const idkButton = document.createElement('button');
            idkButton.textContent = "Idk";
            idkButton.onclick = function() { handleSorryChoice("idk"); };

            choicesContainer.appendChild(yesButton);
            choicesContainer.appendChild(noButton);
            choicesContainer.appendChild(idkButton);
        }, 2000);

        disableChoices();
    };

    function showTextbox(text) {
        userTextbox.style.display = "block";
        userInput.value = text;
    }

    function disableChoices() {
        document.querySelectorAll("#choicesContainer button").forEach(button => {
            button.disabled = true;
            button.style.opacity = 0.5;
        });
    }

    function handleSorryChoice(choice) {
        choicesContainer.innerHTML = '';
        if (choice === "yes") {
            otterImage.src = "yayotter.png";
            resultText.textContent = "Happy ending!";
        } else if (choice === "no") {
            otterImage.src = "maybe.jpg";
            resultText.textContent = "You got brutally murdered";
        } else {
            otterImage.src = "madotter.png";
            resultText.textContent = "You died";
        }
        resultText.style.display = "inline-block";
        endGameButton.style.display = "block"; // Show end game button
    }

    window.endGame = function() {
        window.location.href = "lastfr.html"; // Redirect to message.html
    }

    showFadeInText();
});
