const ok = async () => {
    try { 
        document.getElementById("loading").textContent="loading...."
        const num1 = document.getElementById("put").value;
        const weathericon = document.getElementById("weather-icon");
        const num = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${num1}&appid=c62bbdc90c459c2d8df8cb94835da690&units=metric`);
        const result = await num.json();
        
        if (result.cod == 404) {
            document.getElementById("wrong").style.display = "block";
            document.getElementById("weather").style.display = "none";
        } else {
            console.log(result);
            const temp = document.getElementById("temp");
            temp.innerText = `${result.main.temp}°C`;

            const city = document.getElementById("city");
            city.innerText = `${result.weather[0].main}`;

            const wind = document.getElementById("wind");
            wind.innerText = `${result.wind.speed}°C`;

            const humidity = document.getElementById("humidity");
            humidity.innerText = `${result.main.humidity}km/h`;

            if (result.weather[0].main === "Clouds") {
                weathericon.src = "download.jpg";
            } else if (result.weather[0].main === "Rain") {
                weathericon.src = "3d-cartoon-weather-rain-sign-of-dark-clouds-with-raindrops-isolated-on-transparent-background-3d-render-illustration-png.webp";
            } else if (result.weather[0].main === "Mist") {
                weathericon.src = "Sun_with_Clouds_Transparent_PNG_Picture.png";
            } else if (result.weather[0].main === "Broken Clouds") {
                weathericon.src = "download (2).jpg";
            } else if (result.weather[0].main === "Drizzle") {
                weathericon.src = "Sun_with_Clouds_Transparent_PNG_Picture.png";
            }

            document.getElementById("wrong").style.display = "none";
            document.getElementById("weather").style.display = "block";
        document.getElementById("loading").textContent=""
            
        }

    } catch (error) {
        console.log(error);
    }
}
