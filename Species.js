let idSpecies = 1
class Specie {
    constructor(name,ps,atk,def,spa,spd,spe,abilities,weight,type1,type2){
        this.name = name;
        this.baseStats = [ps,atk,def,spa,spd,spe];
        this.abilities = abilities;
        this.weight = weight;
        this.type1 = type1;
        this.type2 = type2;
        this.id = idSpecies;
        idSpecies++;
    }
}
 let species = [
    new Specie("galvantula",70,77,60,97,60,108,["compound-eyes"],143,"bug","electric"),
    new Specie("greninja",72,95,67,103,71,122,["torrent"],400,"water","dark")
 ]