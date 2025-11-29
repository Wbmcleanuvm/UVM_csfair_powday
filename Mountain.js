mountList = [];

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
    getmountName(){
        return this.mountName;
    }
    getTrail(idx){
        return this.trails[idx];
    }

    addTrail(trail){
        this.trails.push(t);
    }
    getTrailName(inx){
        let t = this.trails[inx];
        return t.getName();
    }
    getTrailStatus(inx){
        let t = this.trails[inx];
        return t.getStatus();
    }
    getTrailDifficulty(inx){
        let t = this.trails[inx];
        return t.getDifficulty
    }
    getNumberOfTrails() 
    {
        return this.trails.length;
    }
    numberOfTrailsOpen() 
    {
        //unfinished
    }
    getAllTrailNames(){
        let lstName = [];
        let i = 1;
        while(i < this.trails.length){
            lstName.push(this.getTrailName(i));
            i++;
        }
        return lstName;

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
            if (trailData[i] == '"'){
            }else{
                add += trailData[i];
            }
            
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
   //objerct initization still doesnt work
    
   return trails;

   
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
