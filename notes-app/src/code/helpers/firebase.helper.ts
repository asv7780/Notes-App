import {Injectable} from '@angular/core';
import {Note} from '../models/note';
import {VirtualStorageHelper} from '../abstract/virtual-storage.helper';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class FirebaseHelper implements VirtualStorageHelper<Note> {
    private notes: AngularFireList<string>;
    private notesArray: Note[] = [];

    constructor(private firebasedb: AngularFireDatabase) {
        this.notes = this.firebasedb.list('notes');

        this.notes.valueChanges().subscribe(res => {
            this.notesArray = res.map(r => JSON.parse(r));
        });

    }

    setData(model: Note): boolean {
        try {

            const item = this.notesArray.find(n => n.id === model.id);

            if (item) {
                this.notes.update(JSON.stringify(item), JSON.stringify(model));
            } else {
                this.notes.push(JSON.stringify(model));
            }

            return true;
        } catch {
            return false;
        }
    }

    getData(): Note[] {
        return this.notesArray;
    }

    remove(model: Note) {
        this.notes.remove(JSON.stringify(model));
    }
}
