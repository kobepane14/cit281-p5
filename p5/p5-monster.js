class Monster {
    constructor(obj = {}) {
        const { monsterName = "Unknown" , minimumLife = 0, currentLife = 100 } = obj
        this.monsterName = monsterName;
        this.minimumLife = minimumLife;
        this.currentLife = currentLife;
        this.isAlive = currentLife >= minimumLife;
    }

    updateLife = (lifeChangeAmount) => {
        console.log(`${this.monsterName} random power drain of ${lifeChangeAmount}`)
        this.currentLife = (this.currentLife - lifeChangeAmount) < 0 ? 0 : this.currentLife - lifeChangeAmount;
        this.isAlive = this.currentLife < this.minimumLife ? false : true;
    }
    
    randomLifeDrain = (minimumLifeDrain, maximumLifeDrain) => {
        function getRandomInteger(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
        }
        let num = getRandomInteger(minimumLifeDrain, (maximumLifeDrain +1))
        this.updateLife(num)
    }
}

module.exports = Monster


// :) :) :)