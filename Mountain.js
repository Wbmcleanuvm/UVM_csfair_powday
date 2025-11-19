class Mountain 
{
    #mountName;
    #location;
    #trails;

    Mountain(mountName) 
    {
        this.mountName = mountName;
    }

    Mountain(mountName, location, trails){
        this.mountName = mountName;
        this.location = location
        this.trails = trails
    
    }
    readDataFromSite() 
    {
    //  Parse through website data   
    }
    numberOfTrails() 
    {
    //  Return number of trails on mountain
    }
    numberOfTrailsOpen() 
    {

    }

    src="https://cdn.jsdelivr.net/npm/papaparse@5.5.0/papaparse.min.js";
    Readtraildata(){
        
        filename = this.mountName + "trails.csv";
        let filename = String(filename);
        console.log(filename);
        papaparse.parse(filename,{
        delimiter: "" ,	// auto-detect
        newline: "",	// auto-detect
        header: true,
        preview: 0,
        encoding: "",
        worker: false,
        comments: false,
        download: false,
        complete: function(results, file) {
	    console.log("Parsing complete:", results, file);
        },
        fastMode: undefined,
        transform: undefined,
        delimitersToGuess: [','],
 
        })
        
    }
}   


class trail extends Mountain
{
    #name;
    #difficulty;
    #status;
    trail(name, difficulty,status){
        this.#name = name;
        this.#difficulty = difficulty;
        this.#status = status;
    }
    getName(){
        return this.#name;
    }
    getDifficulty(){
        return this.#difficulty;
    }
    getStatus(){
        return this.#status;
    }
}
