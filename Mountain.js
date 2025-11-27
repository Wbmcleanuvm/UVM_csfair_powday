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
function convertToTrails(trailData){
    let add = "";
    let trails = [];
    let tconst = [];
    let count = 0;
    let i = 0;
    while ( i < trailData.length){
        if (trailData[i] == ","){  
            count++;
            i++;
            tconst.push(add);
            add = "";
        }
        else if (trailData[i] == "["){
            i++;
            count = 0;
        }
        else if (trailData[i] == "]"){
            newTrail = new trail(tconst[0], tconst[1], tconst[2]);
            trails.push(newTrail);
            i++;
            tconst = [];
        }
        add += trailData[i];
        console.log(add);
        i++;

    }
    console.log(trails);



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
