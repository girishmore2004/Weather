const apiKey="454bbb5d90d5089299497f1d0a7a832b"
// https://api.openweathermap.org/data/2.5/weather?q=Nandurbar&appid=454bbb5d90d5089299497f1d0a7a832b
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const key="&appid=";
const last="&units=metric"
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather weather-icon");

async function checkweather(cityName){
   // const completeUrl=apiUrl.concat(cityName).concat(key).concat(apiKey);
    const completeUrl=apiUrl.concat(cityName).concat(key).concat(apiKey);
    

    const response =await fetch(completeUrl);
   console.log(response);
    if(response.statue==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";
        document.querySelector(".pressure").innerHTML=data.main.pressure+"pa";
        document.querySelector(".Level").innerHTML=data.main.sea_level+"m";
        document.querySelector(".visibility").innerHTML=data.main.visibility;
        document.querySelector(".min").innerHTML=Math.round(data.main.temp_min)+"°C";
        document.querySelector(".max").innerHTML=Math.round(data.main.temp_max)+"°C";

        if(data.weather[0].main=="clear"){
            weatherIcon.src="./images/cloud1.png";
        }
        else if(data.weather[0].main="clouds"){
            weatherIcon.src="./images/clear.png";
        }
        else if(data.weather[0].main="rain"){
            weatherIcon.src="./images/rain.png";
        }
        // else if(data.weather[0].main="Drizzle"){
        //     weatherIcon.src="";
        // }
        // else if(data.weather[0].main="Mist"){
        //     weatherIcon.src="";
        // }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
     }
    
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})


