import { Injectable } from '@angular/core';
import { LocalStorageHelper } from '../helpers/local-storage.helper';
import { FirebaseHelper } from '../helpers/firebase.helper';
import { StorageType, Note } from '../models/note';
import { VirtualStorageHelper } from '../abstract/virtual-storage.helper';

@Injectable()
export class NoteService implements VirtualStorageHelper<Note> {
  private storageType: StorageType;
  private readonly storageKey = 'storageType';
  private service: VirtualStorageHelper<Note>;

  constructor(private readonly localStorageHelper: LocalStorageHelper, private readonly firebaseHelper: FirebaseHelper) {
    this.getCurrentStorageType();
  }

  private setService() {
    switch (this.storageType) {
      case StorageType.LocalStorage:
        this.service = this.localStorageHelper;
        break;

      case StorageType.Firebase:
        this.service = this.firebaseHelper;
        break;
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
