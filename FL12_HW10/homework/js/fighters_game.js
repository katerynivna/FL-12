const ZERO = 0;
const ONE = 1;
const TWO = 2;
const HUNDRED = 100;

class Fighter {
    constructor(name, damage, hp, strength, agility) {
        this._name = name;
        this._damage = parseInt(damage);
        this._hp = parseInt(hp);
        this._strength = parseInt(strength);
        this._agility = parseInt(agility);
        this.currentHP = hp;
        this.wins = 0;
        this.losses = 0;
    }
    getName() {
        return this._name;
    }
    getDamage() {
        return this._damage;
    }
    getStrength() {
        return this._strength;
    }
    getAgility() {
        return this._agility;
    }
    getHealth() {
        return this._health;
    }
    addWin() {
        return this.wins++;
    }
    addLoss() {
        return this.losses++;
    }
    heal(healPoints) {
        let MAX = this._hp;
        if (this.currentHP + parseInt(healPoints) > MAX) {
            this.currentHP = MAX;
            return this.currentHP;
        } else {
            this.currentHP += parseInt(healPoints);
            return this.currentHP;
        }
    }
    logCombatHistory() {
        console.log(`Name: ${this._name}, Wins: ${this.wins}, Losses: ${this.losses}`);
    }
    dealDamage(hit) {
        if (this.currentHP - hit > ZERO) {
            this.currentHP = this.currentHP - hit;
        } else {
            this.currentHP = 0;
            this.addLoss();
        }
    }

    attack(defender) {
        const attackSuccessPersentage = HUNDRED - defender._strength - defender._agility;
        let randomInt = (function() {
            return Math.floor(Math.random() * (Math.floor(HUNDRED) - Math.ceil(ZERO) + ONE) + Math.ceil(ZERO));
        })();
        if (attackSuccessPersentage < randomInt) {
            console.log(`${this._name} attack missed`);
        } else {
            defender.dealDamage(this._damage);
            if (defender.currentHP <= ZERO) {
                this.addWin();
                return console.log(`${this._name} has won!`);
            } else {
                console.log(`${this._name} makes ${this._damage} damage to ${defender._name}`);
            }
        }
    }
    dead() {
        console.log(`${this._name} is dead and can't fight`);
    }
}

function battle(fighter1, fighter2) {
    let turnCounter = 0;
    if (fighter1.currentHP <= ZERO) {
        return fighter1.dead();
    } else if (fighter2.currentHP <= ZERO) {
        return fighter2.dead();
    }
    while (fighter1.currentHP > ZERO && fighter2.currentHP > ZERO) {
        if (turnCounter % TWO === ZERO) {
            turnCounter++;
            fighter1.attack(fighter2);
        } else {
            turnCounter++;
            fighter2.attack(fighter1);
        } 
    }
}
