let input = document.querySelector(".form__inputText");
let btn = document.querySelector(".form__getWeather")
let weather = document.querySelector(".result__temp")
let cityInput = document.querySelector(".result__city-name")
let wind = document.querySelector(".result__wind")
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let city = input.value
    cityInput.textContent = "Загрузка...";
    axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=00de4e9fb8c125725a689da8ef5cd393&units=metric`)
    .then(responce =>{
        console.log(responce)
        weather.textContent = `Температура воздуха:  ${responce.data.main.temp} °C`
        cityInput.textContent = city;
        wind.textContent = `Скорость ветра: ${responce.data.wind.speed} км/ч`;
        document.querySelector(".result__icon").src = `https://openweathermap.org/img/wn/${responce.data.weather[0].icon}@2x.png`
    })
    .catch(err=>{
        console.error(err)
        cityInput.textContent = "Город не найден";
        weather.textContent = "";
        wind.textContent = "";
        document.querySelector(".result__icon").src = "";
    })
})