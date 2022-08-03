import {BaseEntityInterface} from '../prototypes';

export const utils = {
    getObjectsByPrototype<T extends BaseEntityInterface>(prototype: T): T[] {
        return [];
    }
}

export default utils;