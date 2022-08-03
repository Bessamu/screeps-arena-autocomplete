export interface GameObject {
    id: string,
    exists: boolean,
    ticksToDecay: number,
    x: number,
    y: number
}

export default GameObject