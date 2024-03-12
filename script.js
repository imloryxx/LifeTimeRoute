const bookButton = document.getElementById('bookButton');
const bookingForm = document.getElementById('bookingForm');
const homeButton = document.getElementById('homeButton');
const infoButton = document.getElementById('infoButton');
const infoPopup = document.getElementById('infoPopup');

bookButton.addEventListener('click', () => {
    bookingForm.style.display = 'block';
    homeButton.style.display = 'none';
    infoButton.style.display = 'none';
    infoPopup.style.display = 'none';
});

homeButton.addEventListener('click', () => {
    bookingForm.style.display = 'none';
    homeButton.style.display = 'block';
    infoButton.style.display = 'block';
    infoPopup.style.display = 'none';
});

infoButton.addEventListener('click', () => {
    bookingForm.style.display = 'none';
    homeButton.style.display = 'block';
    infoButton.style.display = 'block';
    infoPopup.style.display = 'block';
});

// JavaScript per il reindirizzamento dopo la compilazione del modulo di prenotazione
// Aggiungi questo codice dopo la gestione dell'invio del modulo nella tua pagina HTML
window.location.href = 'https://docs.google.com/spreadsheets/d/1kAHN5afQ1BGnDc_m6vIo-2mgKH5aCsWivJunajaSRKs/edit?usp=sharing';

