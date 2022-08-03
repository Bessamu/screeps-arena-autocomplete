import GameObject from '../game-object'
import Store from '../store'

export interface Creep extends GameObject {
    my: boolean
    hits: number
    store(): Store
    moveTo(target: GameObject)
    harvest(target: GameObject)
}

export default Creep