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
    Readtraildata(mount){
        
        mount = mount + "trails.csv";
        console.log(mount);
        papaparse.parse(mount,{
            download:true,
            header:true,
            complete:function(results){
                console.log(results.data);
                return "results Read";
            }
            
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
