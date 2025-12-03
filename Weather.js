var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
class weatherData{
    constructor(temp, feesLike, windSpeed){
        this.temp = temp;
        this.feelsLike = feelsLike;
        this.windSpeed = windSpeed;
        
    }
}

function convertToWeather(rawdata){
    let add = "";
    let reviews = [];
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
            newReview = new Review(rConst[0], rConst[1], rConst[2], rConst[3]);
            reviews.push(newReview);
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
   return reviews;
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

    
    //checks if server is allowing data fetch
   
    getWeather(JayData).then(jayWeather => {
        if (jayWeather === 1){
            console.log("Too many requests, weather write aborted.");
        }else{
        getWeather(BoltonData).then(boltonWeather => {
            sleep(2000).then(() => {
                getWeather(SmuggsData).then(smuggsWeather => {
                    getWeather(BushData).then(bushWeather => {
                        let header = ["temp","feelslike", "windspeed"];
                        let weatherArray = [header,jayWeather, boltonWeather, smuggsWeather, bushWeather];
                        $.ajax({
                            url: 'weatherWrite.php',
                            type: 'POST',
                            data: {functionName: 'WritetoCsv', weatherData: JSON.stringify(weatherArray)},
                            error: function(xhr, status, error) {
                            console.error("❌ AJAX error:", status, error);
                            console.error("Response text:", xhr.responseText);
                            }
                        })
                    })
                })
            })
        })
        }
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

        
