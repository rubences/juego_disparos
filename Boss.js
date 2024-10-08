class Boss {
    constructor(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }

    attack(target) {
        console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage!`);
        target.takeDamage(this.attackPower);
    }

    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} takes ${damage} damage! Health is now ${this.health}.`);
        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        console.log(`${this.name} has been defeated!`);
    }
}

module.exports = Boss;