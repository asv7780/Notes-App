import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Note, StorageType} from '../../../code/models/note';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Guid} from '../../../code/helpers/guid';
import {NoteService} from '../../../code/services/note.service';

@Component({
    selector: 'app-new-note',
    templateUrl: './new-note.component.html',
    styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {
    model: Note;
    isSubmitting = false;
    noteForm: FormGroup;
    ST = StorageType;

    constructor(private readonly route: ActivatedRoute, private readonly noteService: NoteService) {
        let type = localStorage.getItem('storageType');
        this.noteForm = new FormGroup({
            id: new FormControl(Guid.newGuid()),
            name: new FormControl(String.Empty, Validators.required),
            content: new FormControl(String.Empty, Validators.required),
            storageType: new FormControl(type ? type : StorageType.LocalStorage),
            comments: new FormControl([])
        });
    }

    async ngOnInit() {
        this.model = await Object.getModelFromRoute<Note>(this.route, 'note');

        if (this.model) {
            this.noteForm.setValue(this.model);
        }
    }

    saveNote(form: any) {
        if (!this.isSubmitting && this.noteForm.valid) {
            this.isSubmitting = true;
            this.noteService.setData(form);
            this.isSubmitting = false;
        }
    }


}
