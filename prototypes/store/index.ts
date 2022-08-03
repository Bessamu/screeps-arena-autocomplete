export interface Store {
    getCapacity(): number,
    getFreeCapacity(resource: string): number,
    getUsedCapacity(): number
};

export default Store;