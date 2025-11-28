/*import Papa from "papaparse";
import "Smuggstrails.csv";*/

class Mountain 
{
    #mountName;
    #location;
    #trails = [];
    #trailFilename;


    Mountain(mountName, trailFilename) 
    {
        this.mountName = mountName;
        this.trailFilename = trailFilename;
    }

    addTrail(trail){
        this.trails.push(t);
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
    
    
    Readtraildata(){
           
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
