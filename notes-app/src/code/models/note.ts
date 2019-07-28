import {Guid} from '../helpers/guid';
import {Comment} from './comment';

export class Note {
    public id: Guid = new Guid();
    public storageType: StorageType = StorageType.LocalStorage;

    constructor(public name: string = String.Empty,
                public content: string = String.Empty,
                public comments: Comment[] = []) {
        this.storageType = +localStorage.getItem('storageType') as StorageType;

        if (!this.storageType) {
            this.storageType = StorageType.LocalStorage;
            localStorage.setItem('storageType', this.storageType.toString());
        }
    }

    public merge(note: Note): Note {
        Object.getOwnPropertyNames(note).forEach(prop => {
            this[prop] = note[prop];
        });

        return this;
    }
}

export enum StorageType {
    LocalStorage = 1,
    Firebase = 2,
}
