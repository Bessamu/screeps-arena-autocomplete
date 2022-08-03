import OwnedStructure from '../owned-structure'

export interface StructureSpawn extends OwnedStructure {
    spawnCreep(body: string[]): Array<object>
}

export default StructureSpawn
