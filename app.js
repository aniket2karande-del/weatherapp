const apiKey = "616ac04485744c1f8d565552262205";

const baseurl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
const btn = document.querySelector("button");
const temp = document.querySelector(".temp");
const rain = document.querySelector(".rain");
const condition = document.querySelector(".condition");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherCard = document.querySelector(".weather-card");



const update = (
    tempfin,
    rainfin,
    condifin,
    humifin,
    windfin
) => {

    temp.innerText = `Temp: ${tempfin}°C`;

    rain.innerText = `Rain: ${rainfin}`;

    condition.innerText = `Condition: ${condifin}`;

    humidity.innerText = `Humidity: ${humifin}%`;

    wind.innerText = `Wind: ${windfin} km/h`;
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();//taki submit pe page refresh na ho
    let cityin = document.querySelector("form input");

    let cityinval = cityin.value;
    const url = `${baseurl}${cityinval}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    console.log(data.current.temp_c);
    let tempfin = data.current.temp_c;
    let rainfin = data.current.chance_of_rain;
    let condifin = data.current.condition.text;
    let humifin = data.current.humidity;
    let windfin = data.current.wind_kph;
    weatherCard.style.display = "flex";
    update(
   tempfin,
   rainfin,
   condifin,
   humifin,
   windfin
);

})
