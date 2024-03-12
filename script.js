const bookButton = document.getElementById('bookButton');
const bookingFormSection = document.getElementById('bookingForm');
const homeButton = document.getElementById('homeButton');
const infoButton = document.getElementById('infoButton');
const infoPopup = document.getElementById('infoPopup');

bookButton.addEventListener('click', () => {
    bookingFormSection.style.display = 'block';
    homeButton.style.display = 'none';
    infoButton.style.display = 'none';
    infoPopup.style.display = 'none';
});

homeButton.addEventListener('click', () => {
    bookingFormSection.style.display = 'none';
    homeButton.style.display = 'block';
    infoButton.style.display = 'block';
    infoPopup.style.display = 'none';
});

infoButton.addEventListener('click', () => {
    bookingFormSection.style.display = 'none';
    homeButton.style.display = 'block';
    infoButton.style.display = 'block';
    infoPopup.style.display = 'block';
});

// Gestione dell'invio del modulo di prenotazione
const bookingForm = document.querySelector('.booking-form form');
bookingForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita il comportamento predefinito di invio del modulo
    // Esegui le operazioni di invio del modulo
    window.location.href = 'https://docs.google.com/spreadsheets/d/1kAHN5afQ1BGnDc_m6vIo-2mgKH5aCsWivJunajaSRKs/edit?usp=sharing'; // Reindirizza dopo l'invio del modulo
});
