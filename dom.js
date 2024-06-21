console.log(pokemons)
let Raul = new Trainer("Raul",new Team(pokemons[1],"ou"))
let player = new Trainer("Player",new Team(pokemons[0],"ou"))

console.log(player)

function tirarMoneda() {
    return Math.floor(Math.random() * 2);
  }

function chekTrainerHealtyTeam(trainer) {
    chek=false
    i=0
    while (chek==false){
        if (trainer.team.pokemons[i].isDefeated == false) {
            return true
        }
        i++;
        if (i == trainer.team.pokemons.length) {
            return false
        }
    }
}

function damageCalculate(user,enemy,move) {
    let e = 1
    let b = 1
    let v = Math.round(Math.random()*(100-85)+parseInt(85))
    if (user.form.type1 == move.type|| user.form.type2 == move.type) {
        b = 1.5
    }
    let damage = 0.01 * b * e * v * ((((0.2 * 100 + 1)*user.stats[3]*move.power)/(25*enemy.stats[4]))+2)
    return damage
}

function survival(pokemon,damage){
    if (pokemon.life <= damage) {
        pokemon.life = 0;
        pokemon.isDefeated = true
        return true
    }
    else {
        pokemon.life = pokemon.life - damage
        return false
    }
}

function turnOrder (pokemonArray) {
// esta funcion se puede hacer MUCHO mejor, se tendría que hacer una lista para meter a los pokes y luego comparar velocidad y prioridad con un doble for
    let order = [];
    let arraySupport = pokemonArray;
    let arraySupport2 = [];
    for (let x = 0;x <arraySupport.length;x++) {
        for (let i = 0;i <arraySupport.length;i++){
            arraySupport2 = []
            if (order == 0) {
                console.log("se metió un pokemon a order (", arraySupport[i],")",i)
                order.push(arraySupport[i])
                arraySupport.splice(i,1)
                console.log("como quedó array support:",arraySupport)
            }
            if (arraySupport[i]!=order[x]){
                console.log("el pokemon del array support es diferente al del orden")
                if (arraySupport[i].priority > order[x].priority) {
                    console.log("el orden es diferente entre ambos pokemon")
                    arraySupport2.push(arraySupport[i])
                    arraySupport.splice(i,1,order[x])
                    order.splice(x,1,arraySupport2[i])
                    console.log(order,arraySupport)
                }
                else if (arraySupport[i].stats[5] > order[x].stats[5]) {
                    console.log("la velocidad es mayor a la de orden")
                    arraySupport2.push(arraySupport[i])
                    arraySupport.splice(i,1,order[x])
                    order.splice(x,1,arraySupport2[i])
                    console.log(order,arraySupport)
                }
                else if (arraySupport[i].stats[5] == order[x].stats[5] && arraySupport[i].priority == order[x].priority) {
                    console.log("la velocidad y la prioridad son iguales")
                    if (tirarMoneda == 1) {
                        console.log("el que estaba en support, se mete primero")
                        arraySupport2.push(arraySupport[i])
                        arraySupport.splice(i,1,order[x])
                        order.splice(x,1,arraySupport2[i])
                        console.log(order,arraySupport)
                    }
                    else {
                        console.log("el que estaba en order se queda")
                        order.push(arraySupport[i])
                        console.log(order,arraySupport)

                    }
                }
                else {
                    console.log("el pokemon de array support se mete despues del de orden")
                    order.push(arraySupport[i])
                    console.log(order,arraySupport)

                }
            }
        }
    }
    return order
/*    if (pokemon1.priority > pokemon2.priority) {
        order.push(pokemon1,pokemon2);
    }
    else if (pokemon1.priority < pokemon2.priority) {
        order.push(pokemon2,pokemon1)
    }
    else if (pokemon1.stats) */
}