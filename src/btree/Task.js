class Task {
    constructor(params) {
        this.params = {
            start: function(blackboard) {
                blackboard.isStarted = true
            },
            end: function(blackboard) {
                blackboard.isStarted = false
            },

            run: function(blackboard) {
                return 'success'
            }
        }
        Object.keys(params).forEach(key => {
            this.params[key] = params[key]
        })
    }
    setBlackBoard(blackboard) {
        this.blackboard = blackboard
    }
    run(blackboard) {
        this.params.start(blackboard)
        let out = this.params.run(blackboard)
        this.params.end(blackboard)
        return out
    }
}

export default Task