
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=876ad98b2ea0c1ee4e26d338a4e3ae12&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response =await fetch(apiUrl + city );

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.className =  
        "fa-regular fa-cloud weather-icon"; 
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.className =  
        "fa-solid fa-sun weather-icon";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.className =  
        "fa-duotone fa-solid fa-cloud-rain weather-icon";
    }
    
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.className =  
        "fa-solid fa-cloud-rain weather-icon";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.className =  
        "fa-solid fa-water weather-icon";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

