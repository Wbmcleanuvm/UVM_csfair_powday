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
    getTrailList(){
        return this.trails;
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
        const difficulty = t.getDifficulty();

        const emojiMap = {
            "Beginner": "🟢",
            "Intermediate": "🔵",
            "Advanced": "⚫"
        };

        const emoji = emojiMap[difficulty] || "🌲";

        t.setDifficulty(difficulty + emoji);
        return t.getDifficulty();

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
function fetchTrails(mountPath) {
            return fetch(mountPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to read response");
                }
                return response.json();
            })
            .then(data => {
                const trails = convertToTrails(data.message);
                return trails;
            })
            .catch(error => console.error('Error fetching trail data:', error));
        
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
        }
        i++;

    }
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
        this.rating = 0;
        this.numRatings = 0;
    }
    addRating(rating){
        this.numRatings += 1;
        let newRating = (this.rating + rating) / this.numRatings;
        this.rating = newRating
    }
    getRating(){
        return this.rating;
    }
    getName(){
        return this.#name;
    }
    getDifficulty(){

        const emojiMap = {
            "Beginner": "🟢",
            "Intermediate": "🔵",
            "Advanced": "⚫"
        };
        const emoji = emojiMap[difficulty] || "🌲";
        this.difficulty = (difficulty + emoji);
        return this.difficulty;
    }
    getStatus(){
        return this.#status;
    }
    setDifficulty(difficulty){
        this.difficulty = difficulty;
    }
}

