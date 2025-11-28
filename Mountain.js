/*import Papa from "papaparse";
import "Smuggstrails.csv";*/

class Mountain 
{
    #mountName;
    #location;
    #trails = [];


    constructor(mountName, trails) 
    {
        this.mountName = mountName;
        this.trails = trails;
    }

    addTrail(trail){
        this.trails.push(t);
    }
    getTrailName(inx){
        return this.trails[inx].getName();
    }
    getTrailStatus(inx){
        return this.trails[inx].getStatus();
    }
    getTrailDifficulty(inx){
        return this.trails[inx].getDifficulty();
    }
    getNumberOfTrails() 
    {
        return this.trails.length;
    }
    numberOfTrailsOpen() 
    {
        //unfinished
    }
}

function convertToTrails(mObjName, mountainName, trailData){
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
    /*
    prints trails to console
    let s = 0;
    while (s<trails.length){
        console.log(trails[s]);
        s++;
    } */
   if (mObjName == "Smuggs"){
        Smuggs = new Mountain(mountainName, trails);
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
