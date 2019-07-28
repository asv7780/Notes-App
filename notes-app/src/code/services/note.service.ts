import {Injectable} from '@angular/core';
import {LocalStorageHelper} from '../helpers/local-storage.helper';
import {FirebaseHelper} from '../helpers/firebase.helper';
import {Note, StorageType} from '../models/note';
import {VirtualStorageHelper} from '../abstract/virtual-storage.helper';

@Injectable()
export class NoteService implements VirtualStorageHelper<Note> {
    private storageType: StorageType;
    private readonly storageKey = 'storageType';
    private service: VirtualStorageHelper<Note>;
    public ST = StorageType;

    constructor(private readonly localStorageHelper: LocalStorageHelper, private readonly firebaseHelper: FirebaseHelper) {
        this.getCurrentStorageType();
    }

    private setService() {
        if (this.storageType == StorageType.LocalStorage) {
            this.service = this.localStorageHelper;
        } else if (this.storageType == StorageType.Firebase) {
            this.service = this.firebaseHelper;
        }
    }

    private getCurrentStorageType() {
        this.storageType = +localStorage.getItem(this.storageKey) as StorageType;

        if (!this.storageType) {
            this.storageType = StorageType.LocalStorage;
            localStorage.setItem(this.storageKey, this.storageType.toString());
        }
    }

    public setData(model: Note): boolean {
        this.storageType = model.storageType;
        this.setService();
        return this.service.setData(model);
    }

    public getData(): Note[] {
        this.getCurrentStorageType();
        this.setService();
        return this.service.getData();
    }

    public remove(model: Note) {
        this.storageType = model.storageType;
        this.setService();
        this.service.remove(model);
    }
}
