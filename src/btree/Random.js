import register from "./Register.js"
import states from "./States.js"


class Random {
    constructor(params) {
        this.params = {
            nodes: []
        }
        this.index = 0
        this.params = params
        this.again = null
        Object.keys(this.params.nodes).forEach(key => {
            if (typeof this.params.nodes[key] == 'string') {
                this.params.nodes[key] = register.getNode(this.params.nodes[key])
            }
        })
    }

    run(blackboard) {
        if (this.again != null) {
            this.index = this.again
        } else {
            this.index = Math.floor(Math.random() * this.params.nodes.length)
        }

        let out = this.params.nodes[this.index].run(blackboard)
        if (out == states.running) {
            this.again = this.index
            return states.running
        }
        this.again = null
        return out
    }
}

export default Random