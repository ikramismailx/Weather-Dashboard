var apiKey = "8f76e19dc76653037b3dc24117972307"

var submitBtn = document.getElementById("search-button");
submitBtn.addEventListener("click", function (e) {
    e.preventDefault()
    var targetCity = document.getElementById("search-input").value;
    console.log(targetCity)
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + targetCity + "&appid=" + apiKey
    fetch(url)
        .then(function (res) { return res.json() })
        .then(function (data) {
            console.log(data);
            document.getElementById('today-city').innerHTML = "City: " + targetCity;
            document.getElementById('today-humidity').innerHTML = "humidity: " + data.main.humidity + " %";
            document.getElementById('today-temp').innerHTML = "temperature: " + data.main.temp + " °C";
            document.getElementById('today-wind-speed').innerHTML = "wind speed: " + data.wind.speed + " KPH";
            document.getElementById('today-wind-speed').innerHTML = data.wind.speed;

            var lat = data.coord.lat
            var lon = data.coord.lon

            var urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
            fetch(urlForecast)
                .then(function (res) { return res.json() })
                .then(function (data2) {
                    console.log(data2);
                    console.log(data2.list[0].main.humidity)

                    document.getElementById('future-humidity').innerHTML = "(forecasted) humidity: " + data2.list[0].main.humidity + " %";
                    document.getElementById('future-temp').innerHTML = "(forecasted) temp: " + data2.list[0].main.temp + " °C";
                    document.getElementById('future-wind-speed').innerHTML = "(forecasted) wind speed: " + data2.list[0].wind.speed + " KPH";
                    document.getElementById('future-date-text').innerHTML = data2.list[0].dt_txt;
                })
        })


});