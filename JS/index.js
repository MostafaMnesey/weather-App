var city = document.getElementById("city");
var isRain = document.querySelector(".chance-rain");
var temp = document.querySelector(".temp");
var icon = document.querySelector(".icon-img");
var dayForecast = document.querySelector(".today");
var realFeel = document.querySelector(".feel-temp");
var chanceRain = document.querySelector(".chance-rain2");
var wind = document.querySelector(".wind");
var uv = document.querySelector(".uv");
var days;
var dates = [];
var daynames = [];
var forecasts = document.querySelector(".forecast-list");

/* ? apikey=6a317ab58d8d4b0aa54143535240912 */
search = document.getElementById("search");

async function getCoordinates() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject("Error getting location: " + error.message);
        }
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
}

async function getloc() {
  loc = await getCoordinates();
  return loc;
}
async function getWeather(location = getloc()) {
  var loc = await location;

  try {
    mHttp = new XMLHttpRequest();
    response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=6a317ab58d8d4b0aa54143535240912&q=${loc.latitude},${loc.longitude}&days=7`
    );
    data = await response.json();
    day = await data.forecast.forecastday[0].day;
    display(data);
    console.log(data);
    
  } catch (e) {
    console.log("error", e);
  }
}
getWeather();

async function display(arr) {
  console.log(arr);
  city.innerHTML = arr.location.name;
  isRain.innerHTML = arr.forecast.forecastday[0].day.daily_chance_of_rain;
  temp.innerHTML = arr.current.temp_c;
  icon.setAttribute("src", arr.current.condition.icon);
  console.log();
  var cartona = ``;
  for (var i = 0; i < arr.forecast.forecastday[0].hour.length; i += 3) {
    var hour = arr.forecast.forecastday[0].hour[i];
    var time = hour.time.split(" ");
    cartona += ` <li  class="d-flex flex-column mx-1 text-center hours">
                      <div
                        class="hour d-flex flex-column justify-content-between"
                      >
                        <span class=" fs-16 py-1">${time[1]} </span>
                        <img src="${hour.condition.icon}" class="w-100 py-1" alt="" />
                        <span class=" fs-16 py-1 text-center"
                          >${hour.temp_c} <sub>o</sub></span
                        >
                      </div>
                    </li>`;
  }
  dayForecast.innerHTML = cartona;
  realFeel.innerHTML = arr.current.feelslike_c;
  chanceRain.innerHTML = arr.forecast.forecastday[0].day.daily_chance_of_rain;
  wind.innerHTML = arr.current.wind_kph;
  uv.innerHTML = arr.current.uv;
  days = arr.forecast.forecastday;
  console.log(days);
  

  daynames = []
  for (var i = 0; i < days.length; i++) {
    day = days[i].date;
    dates.push(day);
    datee = new Date(day);
    // console.log(datee.toLocalString());
    
    datee = datee.toDateString();
    datee = datee.split(" ");
    daynames.push(datee[0]);
  }
  var cartona2 = ``;
  for (var i = 0; i < daynames.length -1 ; i++) {
    console.log(daynames.length);
    
    cartona2 += `<li day class="px-3 py-3">
                    <div class="day d-flex justify-content-around">
                      <span class="text-white-50 fs-20">${daynames[i]}</span>
                      <img src="${days[i]?.day.condition.icon}" alt="" alt="" />
                      <p>
                        <span class="text-white fs-16">${days[i]?.day.maxtemp_c}</span> <span class="text-white-50 fs-4">/</span>
                        <span class="text-white fs-16">${days[i]?.day.mintemp_c}</span>
                      </p>
                    </div>
                  </li>`;
                  // console.log(days[i]?.day.maxtemp_c);
                  
  }

  forecasts.innerHTML = cartona2;
}

  search.addEventListener("input", async function (e) {
    mHttp = new XMLHttpRequest();
    var response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=6a317ab58d8d4b0aa54143535240912&q=${e.target.value}&days=7`
    );
  /*   var data = await response.json();
     var lat = await data[0].lat;
     var lon = await data[0].lon;

     mHttp = new XMLHttpRequest();
     response = await fetch(
       `http://api.weatherapi.com/v1/forecast.json?key=6a317ab58d8d4b0aa54143535240912&q=${lat},${lon}&days=7`
     ); */
     data = await response.json();
    if(e.target.value== ""){
      console.log("test");
      
      getWeather();
    }
display(data);
  });

