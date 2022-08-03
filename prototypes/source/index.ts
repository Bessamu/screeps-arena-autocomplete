import GameObject from '../game-object'

export interface Source extends GameObject{
    energy: number,
    energyCapacity: number
}

export default Source