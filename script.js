let weather = {
    "apiKey": "1ce626a98858f10e08cff4c47ff7c397",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" + this.apiKey
        ).then((response)=> response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp,humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector("#place").innerText = name;
        document.querySelector("#temp").innerText = temp + "°C";
        document.querySelector("#icon").src = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".typeCloud").innerText = description;
        document.querySelector("#humidity").innerText = humidity + "%";
        document.querySelector("#wind").innerText = speed + "km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name + "')";
    }
}

document.querySelector(".searchBtn").addEventListener("click", function(){
    weather.fetchWeather(document.querySelector(".searchArea").value);
})
document.querySelector(".searchArea").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.fetchWeather(document.querySelector(".searchArea").value);
        document.querySelector(".searchArea").value = "";
    }
})

weather.fetchWeather("New Delhi");