class Pokemon{

    constructor(name,type=[],abilities=[],stats=[],sprites){
        this.name = name;
        this.type= type;
        this.abilities= abilities;
        this.stats= stats;
        this.sprites= sprites;


    }



    static getAbilities(abilities){

        let tempArray = []
        for (let i = 0; i < abilities.length; i++) {
            const elementAbilities = abilities[i].name;
            tempArray.push(elementAbilities)
        }
        return tempArray;
    }

    static getStats(stats){
        let tempArray = []
        for (let i = 0; i < stats.length; i++) {
            const elementStats = stats[i];
            tempArray.push(elementStats)
        }
        return tempArray;
    }

    static getType(type){
        let tempArray = []
        for (let i = 0; i < type.length; i++) {
            const elementType = type[i];
            tempArray.push(elementType)
        }
        return tempArray;
    }









}


