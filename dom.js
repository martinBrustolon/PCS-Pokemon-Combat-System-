console.log(pokemons)
let Raul = new Trainer("Raul",new Team(pokemons[1],"ou"))
let player = new Trainer("Player",new Team(pokemons[0],"ou"))

console.log(player)

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
