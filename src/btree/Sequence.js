import register from "./Register.js"
import states from "./States.js"

class Sequence {
    constructor(params) {
        this.params = {
            nodes: []
        }
        this.index = 0
        this.params = params
        Object.keys(this.params.nodes).forEach(key => {
            if (typeof this.params.nodes[key] == 'string') {
                this.params.nodes[key] = register.getNode(this.params.nodes[key])
            }
        })

    }

    run(blackboard) {
        let tmp = this.params.nodes[this.index].run(blackboard)
        let state = states[tmp]
        if (state != states.success) return state // running or failure
        if (this.params.nodes.length - 1 == this.index) {
            this.index = 0
            return state //success
        }
        this.index++ //next
    }
}

export default Sequence