const envelope = document.querySelector('.envelope-wrapper');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const overlay = document.getElementById('overlay');
let isEnvelopeOpened = false; // Track if the envelope is opened

envelope.addEventListener('click', () => {
    if (!isEnvelopeOpened) {
        // First click: open the envelope
        envelope.classList.add('flap');
        isEnvelopeOpened = true;
    } else {
        // Second click: show the popup
        popup.classList.remove('hidden');
        popup.classList.add('visible');
        overlay.classList.add('visible'); // Show overlay
    }
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
    popup.classList.remove('visible');
    popup.classList.add('hidden');
    overlay.classList.remove('visible'); // Hide overlay
});

