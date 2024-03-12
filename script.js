ocument.getElementById('bookButton').addEventListener('click', function() {
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.info-popup').style.display = 'none';
    document.querySelector('.booking-form').style.display = 'block';
});

document.getElementById('infoButton').addEventListener('click', function() {
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.booking-form').style.display = 'none';
    document.querySelector('.info-popup').style.display = 'block';
});

document.getElementById('homeButton').addEventListener('click', function() {
    document.querySelector('.booking-form').style.display = 'none';
    document.querySelector('.info-popup').style.display = 'none';
    document.querySelector('.home').style.display = 'flex';
});
document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('homeButton');
    const infoButton = document.getElementById('infoButton');
    const bookButton = document.getElementById('bookButton');
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');
    const bookingForm = document.getElementById('bookingForm');
    const infoPopup = document.getElementById('infoPopup');

    homeButton.addEventListener('click', function() {
        toggleActiveSection('home');
    });

    infoButton.addEventListener('click', function() {
        toggleActiveSection('infoPopup');
    });

    bookButton.addEventListener('click', function() {
        toggleActiveSection('bookingForm');
    });

    loginButton.addEventListener('click', function() {
        // Implementa la logica per la visualizzazione del modulo di login
    });

    signupButton.addEventListener('click', function() {
        // Implementa la logica per la visualizzazione del modulo di registrazione
    });

    function toggleActiveSection(sectionId) {
        const sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }
});

// Add event listeners for each city info button
const cities = document.querySelectorAll('.city-info');

cities.forEach(city => {
    city.addEventListener('click', function() {
        cities.forEach(c => c.classList.remove('active'));
        city.classList.add('active');
    });
});
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
    window.location.href = 'https://docs.google.com/spreadsheets/d/1kAHN5afQ1BGnDc_m6vIo-2mgKH5aCsWivJunajaSRKs/edit?usp=sharing';
     // Reindirizza dopo l'invio del modulo
});
