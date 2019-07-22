var engine = {

    gear: function() {
        return 'gear';
    },
    drive: function() {
        return 'driver'
    } 
 
};

var toyotaEngine = {
    gear: function(){
        return 6;
    },
    update: function()
    {
        return "updated engine" 
    }
};

var combinedObject =  Object.assign(toyotaEngine, engine);
console.log(combinedObject)
console.log(combinedObject.gear());