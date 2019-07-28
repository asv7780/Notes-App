import {VirtualStorageHelper} from '../abstract/virtual-storage.helper';
import {Note} from '../models/note';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageHelper implements VirtualStorageHelper<Note> {
    private readonly _storageKey = 'notes';
    private _notes: Note[] = [];

    constructor() {
        let items = localStorage.getItem(this._storageKey);

        if (items) {
            this._notes = JSON.parse(items) as Note[];
        }
    }

    public setData(model: Note): boolean {
        try {
            let item = this._notes.find(n => n.id == model.id);

            if (item) {
                item.merge(model);
            } else {
                this._notes.push(model);
            }

            this.saveChanges();
            return true;
        } catch (e) {
            return false;
        }
    }


    public remove(model: Note) {
        let index = this._notes.findIndex(m => m.id == model.id);

        if (index >= 0) {
            this._notes.splice(index, 1);
        }

        this.saveChanges();
    }

    public getData(): Note[] {
        return this._notes;
    }

    private saveChanges() {
        localStorage.setItem(this._storageKey, JSON.stringify(this._notes));
    }
}
