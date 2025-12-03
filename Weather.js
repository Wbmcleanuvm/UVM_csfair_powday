var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
// KEY
/*
idx 1 = jay
idx 2 = bolton
idx 3 = smuggs
idx 4 = bush
*/
class weatherData{
    constructor(temp, feelsLike, windSpeed,conditions, weatherCode){
        this.temp = temp;
        this.feelsLike = feelsLike;
        this.windSpeed = windSpeed;
        if (parseInt(conditions) == 1){
            this.conditions = "Snowing";
        }else if(parseInt(conditions) == 2){
            this.conditions = "Raining";
        }else{
            this.conditions = "Neither!"
        }
        this.weatherCode = weatherCode;
    }
    getTemp(){
        return this.temp
    }
    getFeelsLike(){
        return this.feelsLike;
    }
    getWindSpeed(){
        return this.windSpeed;
    }
    getConditions(){
        return this.conditions;
    }
    getWeatherCode(){
        return this.weatherCode;
    }
}

function convertToWeather(rawdata){
    let add = "";
    let weather = [];
    let rConst = [];
    let count = 0;
    let i = 0;
    while (i < rawdata.length){
        if (rawdata[i] == ","){  
            count++;
            i++;
            rConst.push(add);
            add = "";
        }
        else if (rawdata[i] == "["){
            i++;
        }
        else if (rawdata[i] == "]"){
            rConst.push(add);
            newWeather = new weatherData(rConst[0], rConst[1], rConst[2], rConst[3], rConst[4]);
            weather.push(newWeather);
            count = 0;
            i++;
            rConst = [];
            add = "";
        }else{
            if (rawdata[i] == '"'){
            }else{
                add += rawdata[i];
            }
        }
        i++;

    }
   return weather;
}


function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getWeather(MountCords){
    return fetch(MountCords)
    .then(res => res.json())
    .then(weatherObj => {
            let listOfData = [];
            let time = new Date();
            //console.log("Weather Data Fetched at: " + time);
            //console.log(weatherObj)
            try{
            let liveVars = weatherObj.data.values;

            let temp = celsiusToFahrenheit(liveVars.temperature).toFixed(1); 
            listOfData.push(temp);

            let tempA = celsiusToFahrenheit(liveVars.temperatureApparent).toFixed(1);
            listOfData.push(tempA);

            let windS = liveVars.windSpeed.toFixed(1);
            listOfData.push(windS);

            let snowIntensity = liveVars.snowIntensity.toFixed(2);
            let rainIntensity = liveVars.rainIntensity.toFixed(2);
            if (snowIntensity > rainIntensity) {
                listOfData.push(1);
            }else if (snowIntensity < rainIntensity)
            {
                listOfData.push(2);
            }else{
                listOfData.push(3)
            }

            let weatherCode = liveVars.weatherCode;
            listOfData.push(weatherCode);

            return listOfData;
            } catch (TypeError){
                return 1;
            }
        })
        .catch(err => console.error('Error fetching live weather data:', err));  
}

function WriteWeather(){
    let BoltonData = 'https://api.tomorrow.io/v4/weather/realtime?location=44.414952, -72.834285&apikey=MAsbiYGVjd9s3cd8yQglLxtzLP0iXJWD'
    let SmuggsData = 'https://api.tomorrow.io/v4/weather/realtime?location=44.55742768018786, -72.77427625520981&apikey=MAsbiYGVjd9s3cd8yQglLxtzLP0iXJWD'
    let BushData = 'https://api.tomorrow.io/v4/weather/realtime?location=44.160883860486656, -72.92925461746343&apikey=MAsbiYGVjd9s3cd8yQglLxtzLP0iXJWD'
    let JayData = 'https://api.tomorrow.io/v4/weather/realtime?location=44.925194956077874, -72.52570284955516&apikey=MAsbiYGVjd9s3cd8yQglLxtzLP0iXJWD'
    let errorFlag = false;
    
    getWeather(JayData).then(jayWeather => {
        getWeather(BoltonData).then(boltonWeather => {
            sleep(2000).then(() => {
                getWeather(SmuggsData).then(smuggsWeather => {
                    getWeather(BushData).then(bushWeather => {
                        let header = ["temp","feelslike", "windspeed"];
                        let weatherArray = [header,jayWeather, boltonWeather, smuggsWeather, bushWeather];
                        //checks if server is allowing data fetch
                        for(let i = 1; i < weatherArray.length; i++){
                            if (weatherArray[i] === 1){
                                errorFlag = true;
                                break;
                            }
                        }
                        if (errorFlag == false){
                        $.ajax({
                            url: 'weatherWrite.php',
                            type: 'POST',
                            data: {functionName: 'WritetoCsv', weatherData: JSON.stringify(weatherArray)},
                            error: function(xhr, status, error) {
                            console.error("❌ AJAX error:", status, error);
                            console.error("Response text:", xhr.responseText);
                            }
                        })
                    }else{
                        console.log("Weather write aborted, rate limited")
                    }
                    })
                })
            })
        })
        
    })

}

function weatherRead() {
    return $.ajax({
        url: 'weatherWrite.php',
        type: 'POST',
        data: { functionName: 'readWeatherCsv' }
    });
}

// Usage:

        
