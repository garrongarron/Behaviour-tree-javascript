import register from './btree/Register.js'
import Task from './btree/Task.js'
import Sequence from './btree/Sequence.js'
import BehaviorTree from './btree/BehaviorTree.js'
import states from './btree/States.js'
import Random from './btree/Random.js'
import Dog from './Dog.js'

register.addNode(
    'bark',
    new Task({
        run: function(dog) {
            dog.bark()
            return states.success
        }
    })
)


let random = new Random({
    nodes: [
        new Task({
            run: function(dog) {
                return dog.wait(1)
            }
        }),
        new Task({
            run: function(dog) {
                return dog.wait(2)
            }
        }),
        new Task({
            run: function(dog) {
                return dog.wait(3)
            }
        }),
    ]
})

register.addNode('random', random)

const tree = new Sequence({
    nodes: [
        'bark',
        new Task({
            run: function(dog) {
                dog.randomlyWalk()
                return states.success
            }
        }),
        'random',
        new Task({
            run: function(dog) {
                if (dog.standBesideATree()) {
                    dog.liftALeg()
                    dog.pee()
                    return states.success
                } else {
                    return states.failure
                }
            }
        })
    ]
})

const dog = new Dog()

const bTree = new BehaviorTree({
    tree: tree,
    blackboard: dog
})

// The "game" loop:
setInterval(function() {
    bTree.step()
}, 1000 / 30)