function solution(bandage, health, attacks) {
    let maximum = health
    let combo = 0
    let count = 0

    for (let ch = 1; ch <= attacks[attacks.length-1][0]; ch++){
        console.log(health)
        if (attacks[count][parseInt(0)] === ch){
            health = health - attacks[count][1]
            count = count + 1
            combo = 0
            if (health <= 0){
                return -1
            }
            
        }
        else{
            combo = combo + 1
            health = health + bandage[1]
            if (combo === bandage[0]){
                health = health + bandage[2]
                combo = 0
            }
            
            if (health > maximum){
                    health = maximum
            }
            
        }
    }
    
    return health;
}