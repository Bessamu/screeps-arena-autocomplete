import GameObject from '../game-object'

export interface Structure extends GameObject {
    hits: number,
    hitsMax: number
}

export default Structure