import {Component, OnInit} from '@angular/core';
import {Note} from '../../../code/models/note';
import {NoteService} from '../../../code/services/note.service';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.scss']
})


export class NotesListComponent implements OnInit {
    private notes: Note[];


    constructor(private noteService: NoteService) {
    }

    ngOnInit(): void {
        this.getNotes();
    }

    public getNotes(): void {
        this.notes = this.noteService.getData();

    }

    private deleteItem(index) {
        this.noteService.remove(this.notes[index]);
    }


    // onSelected(item: Note) {
    //     if (item) {
    //         this.router.navigate(['/note'])
    //     }
    // }
}


