var obj = {
    name:'Rahul',
    kaam:'work',
    home:function()
    {
        this.house='Band',
        this.work='engineer',
        this.play='Badminton'
    }

};
for (var name in obj) {
     var c = (obj.hasOwnProperty(name)=='true') ? 6 : 8;
     console.log(c);
}
