import states from "./btree/States.js";

class Dog {
    constructor() {
        this.counter = 0
    }
    bark() {
        console.log('wow');
    }
    randomlyWalk() {
        console.log('randomlyWalk');
    }
    standBesideATree() {
        return true
    }
    liftALeg() {
        console.log('liftALeg');
    }
    pee() {
        console.log('pee');
    }
    wait(seconds) {
        if (this.counter == 0) {
            this.counter = new Date().getTime() + 1000 * seconds
            console.log(`waiting ${seconds} seconds +++++++++++++++++`);
            return states.running
        }
        if (this.counter < new Date().getTime()) {
            this.counter = 0
            console.log('done +++++++++++++++++');
            return states.success
        }
        return states.running
    }
}

export default Dog