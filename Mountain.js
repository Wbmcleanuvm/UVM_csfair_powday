/*import Papa from "papaparse";
import "Smuggstrails.csv";*/

class Mountain 
{
    mountName;
    #location;
    #trails = [];
    trailFilename;


    Mountain(mountName, trailFilename) 
    {
        this.mountName = mountName;
        this.trailFilename = trailFilename;
    }

    setTrails(trails){
        this.trails = trails;
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
    
    /*src="https://cdn.jsdelivr.net/npm/papaparse@5.5.0/papaparse.min.js";
    Readtraildata(){
        let filename = this.mountName + "trails.csv";
        filename = String(filename);
        console.log(filename);
        Papa.parse("Smuggstrails.csv", {
        download: true,
        delimiter: "",	// auto-detect
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
        delimitersToGuess: [','],
 
        })
        this.setTrails(results)
        
    }*/

    
    
   

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
