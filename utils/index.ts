import { GameObject } from '../prototypes';

export const utils = {
    getObjectsByPrototype<T extends GameObject>(prototype: T): T[] {
        return [];
    }
}

export default utils;