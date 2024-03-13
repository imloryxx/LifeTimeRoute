// Gestione dell'invio del modulo di prenotazione
const bookingForm = document.querySelector('.booking-form form');
bookingForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita il comportamento predefinito di invio del modulo
    // Esegui le operazioni di invio del modulo
    window.location.href = 'https://docs.google.com/spreadsheets/d/1kAHN5afQ1BGnDc_m6vIo-2mgKH5aCsWivJunajaSRKs/edit?usp=sharing';
     // Reindirizza dopo l'invio del modulo
});
