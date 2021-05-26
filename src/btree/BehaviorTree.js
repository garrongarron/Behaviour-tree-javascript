import states from "./States.js"

class BehaviorTree {
    constructor(params) {
        this.params = {
            tree: null,
            blackboard: null
        }
        Object.keys(params).forEach(key => {
            this.params[key] = params[key]
        })
    }

    step() {
        let out = this.params.tree.run(this.params.blackboard)
        if (out == states.success) {
            return true
        }
    }
}

export default BehaviorTree