const API_KEY="b9bf03c0d17ceb529b769f1b4a42e47f"

const fetchData=position =>{
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`).then(
        response => response.json()).then(data => setWeatherData(data))
}

const setWeatherData = data =>{
    console.log(data)
    const watherData = {
        location: data.name,
        humidity : data.main.humidity,
        pressure : data.main.pressure,
        temperature: data.main.temp,
        //temperatureMax : data.main.temp_max,
    }
    Object.keys(watherData).forEach(
        key => {
            document.getElementById(key).textContent = watherData[key];
        }
    );
    }

const onload=()=>{
    navigator.geolocation.getCurrentPosition(fetchData);
}