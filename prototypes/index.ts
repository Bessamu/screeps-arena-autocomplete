import Store from './store'

export interface BaseEntityInterface {
    my: boolean
}

export interface Creep extends BaseEntityInterface {
    store(): Store
}

export interface StructureSpawn extends BaseEntityInterface{
    spawnCreep(body: string[]): Array<object>
}
export interface Source extends BaseEntityInterface{

}

export const prototypes = {
    Creep: <Creep> {},
    StructureSpawn: <StructureSpawn> {},
    Source: <Source> {}
}

export default prototypes