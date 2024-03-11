function showCity(cityName) {
    // Nascondi tutte le città
    var cities = document.querySelectorAll('.city');
    cities.forEach(city => {
        city.classList.remove('active');
    });

    // Mostra la città selezionata
    var city = document.getElementById(cityName);
    city.classList.add('active');
}
