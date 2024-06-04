let idPokemon = 1

function pokeStats(baseStats,evs) {
    let stats = []
    for (let i=0;i<6;i+=1) {
        if (i==0) {
            stats.push(10 + (100/100 * ((baseStats[i]*2) + 31 + evs[i]/4)) + 100)
            console.log(stats[0])
        }
        else {
            console.log((5 + (100/100 * ((baseStats[i]*2)+31+evs[i]/4))))
            stats.push((5 + (100/100 * ((baseStats[i]*2)+31+evs[i]/4))))
        }
    }
    return stats
} 

class Pokemon {
    constructor(specie,form,ability,moves,evs) {
        this.specie = specie;
        this.form = form
        this.ability = this.form.abilities[ability];
        this.evs = evs
        this.stats = pokeStats(this.form.baseStats,this.evs)
        this.isDefeated = false;
        this.object = ""
        this.status = ""
        this.isConfused = false
        this.moves = moves
        this.id = idPokemon;
        idPokemon++;
    }
}

let pokemons = [
    new Pokemon(species[0],pokemonForms[0],0,"",[4,0,0,252,0,252]),
    new Pokemon(species[1],pokemonForms[1],0,"",[4,0,0,252,0,252])
]