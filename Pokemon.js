let idPokemon = 1
class Pokemon {
    constructor(specie,ps,atk,def,spa,spd,spe,ability,weight,type1,type2,moves) {
        this.specie = specie;
        this.ps = ps;
        this.atk = atk;
        this.def = def;
        this.spa = spa;
        this.spd = spd;
        this.spe = spe;
        this.ability = ability;
        this.weight = weight;
        this.type1 = type1;
        this.type2 = type2;
        this.isDefeated = false;
        this.object = ""
        this.status = ""
        this.isConfused = false
        this.moves - moves
        this.id = idPokemon;
        idPokemon++;
    }
}

let pokemons = [
    new Pokemon("galvantula",70,77,60,97,60,108,"compound-eyes",143,"bug","electric"),
    new Pokemon("greninja",72,95,67,103,71,122,"torrent",400,"water","dark")
]