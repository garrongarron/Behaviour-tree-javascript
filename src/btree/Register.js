class Register {
    constructor() {
        this.nodes = {}
    }
    addNode(name, node) {
        this.nodes[name] = node
    }
    getNode(name) {
        return this.nodes[name]
    }
}
let register = new Register()

export default register