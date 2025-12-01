var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
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
            const t = document.getElementById("temp");
            t.innerHTML = "Tempature: " + temp + " °F";
            listOfData.push(t);

            let tempA = celsiusToFahrenheit(liveVars.temperatureApparent).toFixed(1);
            const ta = document.getElementById("tempApparent");
            ta.innerHTML = "Feels Like: " + tempA + " °F";
            listOfData.push(ta);

            let windS = liveVars.windSpeed.toFixed(1);
            const wSpeed = document.getElementById("windSpeed");
            wSpeed.innerHTML = "Wind Speed: " + windS + " mph";
            listOfData.push(wSpeed);
            
            return listOfData;
            } catch (TypeError){
                return 1;
            }
        })
        .catch(err => console.error('Error fetching live weather data:', err));  
}

function WriteWeather(){
    let errorFlag = false;
    let JayData = 'https://api.tomorrow.io/v4/weather/realtime?location=44.925194956077874, -72.52570284955516&apikey=MAsbiYGVjd9s3cd8yQglLxtzLP0iXJWD'
    getWeather(JayData).then(jayWeather => {
    if (jayWeather == 1){
        errorFlag = true;
    }
    })
    if (errorFlag = false){
   

    let BoltonData = 'https://api.tomorrow.io/v4/weather/realtime?location=44.5362,-72.8687&apikey=MAsbiYGVjd9s3cd8yQglLxtzLP0iXJWD'
    let SmuggsData = 'https://api.tomorrow.io/v4/weather/realtime?location=44.4875,-72.7831&apikey=MAsbiYGVjd9s3cd8yQglLxtzLP0iXJWD'
    let BushData = 'https://api.tomorrow.io/v4/weather/realtime?location=44.1716,-72.6815&apikey=MAsbiYGVjd9s3cd8yQglLxtzLP0iXJWD'
    getWeather(JayData).then(jayWeather => {
        getWeather(BoltonData).then(boltonWeather => {
            getWeather(SmuggsData).then(smuggsWeather => {
                getWeather(BushData).then(bushWeather => {
                    //let weatherArray = [jayWeather, boltonWeather, smuggsWeather, bushWeather];
                    


                })
            })    
        })
    })
    }else{
        console.log("Weather Write Aborted due to error flag.");
    }



     //clears old data
    $.ajax({
    url: 'weatherWrite.php',
    type: 'POST',
    data: { functionName: 'clearCsvCache' },
    dataType: 'text',
    success: function(response) {
        console.log("✅ Server responded:", response);
    },
    error: function(xhr, status, error) {
        console.error("❌ AJAX error:", status, error);
        console.error("Response text:", xhr.responseText);
    }
    });

///////////////////////////////////////////////

    col = []
                    let weatherArray = []
                    for (let r=0; r < 4; r++){
                        for(let c = 0; c<3; c++){
                            col.push("hi");
                        }
                        weatherArray.push(col);
                        col = [];
                    }
                    $.ajax({
                        url: 'weatherWrite.php',
                        type: 'POST',
                        datatype:'text',
                        data: {functionName: 'WritetoCsv', weatherData: JSON.stringify(weatherArray)},
                    success: function(response) {
                        console.log("✅ Server responded:", response);
                    },
                    error: function(xhr, status, error) {
                        console.error("❌ AJAX error:", status, error);
                        console.error("Response text:", xhr.responseText);
                    }
                    });
                    

}