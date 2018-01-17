// Classes
class dogs{

    //Constructors
    constructor(name,breed){
        this.name=name;
        this.breed=breed;
    }

    //Methods
    show(){
        console.log(`This is wht in show method.. ${this.name}`)
    }

    //Set method
    set nickname(nick){
        this.nick=nick;
        //console.log(`Nickname : ${this.nick}`)
    }

    //Get property
    get nickname(){
        this.nick.toUpperCase();
    }

    //Static Methods
    static info(){
        console.log("V r in static method");
    }
}

const d1= new dogs("Rozan","Pammi");
 