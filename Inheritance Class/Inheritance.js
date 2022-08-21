class game {
    constructor() {
        this.cricketer = 'yuvaraj SIngh'
    }
    show() {
        return this.cricketer;
    }
}


class sixes extends game {

    constructor() {
        super();
        this.hit = '6';
    }
    magnificent() {
        return this.hit;
    }

}
const player = new sixes();
console.log(player.magnificent());
console.log(player.show());