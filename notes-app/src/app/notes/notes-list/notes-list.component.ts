import {Component, OnInit} from '@angular/core';
import {Note, StorageType} from '../../../code/models/note';
import {NoteService} from '../../../code/services/note.service';


@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.scss']
})


export class NotesListComponent implements OnInit {
    private notes: Note[];
    public ST = StorageType;
    private readonly storageKey = 'storageType';

    constructor(private noteService: NoteService) {
    }

    ngOnInit(): void {
        this.getNotes();

    }

    public getNotes(): void {
        localStorage.setItem(this.storageKey, this.ST.LocalStorage.toString());
        this.notes = this.noteService.getData();
    }

    private deleteItem(index) {
        this.noteService.remove(this.notes[index]);
    }


    someMethod(value: StorageType) {
        if (value == this.ST.LocalStorage) {
            localStorage.setItem(this.storageKey, this.ST.LocalStorage.toString());
            this.notes = this.noteService.getData();
        } else if (value == this.ST.Firebase) {
            localStorage.setItem(this.storageKey, this.ST.Firebase.toString());
            this.notes = this.noteService.getData();
        }
    }
}


