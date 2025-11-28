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
        }
        else if (trailData[i] == "]"){
            tconst.push(add);
            newTrail = new trail(tconst[0], tconst[1], tconst[2]);
            trails.push(newTrail);
            count = 0;
            i++;
            tconst = [];
            add = "";
        }else{
            add = add + trailData[i];
            //console.log(add);
        }
        i++;

    }
    let s = 0;
    while (s<trails.length){
        console.log(trails[s]);
        s++;
    }



}
class trail
{
    #name;
    #difficulty;
    #status;
    constructor(name, status, difficulty){
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
