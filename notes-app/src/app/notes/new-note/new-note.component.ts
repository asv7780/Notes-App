import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note, StorageType } from '../../../code/models/note';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Guid } from '../../../code/helpers/guid';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {
  model: Note;
  isSubmitting = false;
  noteForm: FormGroup;

  constructor(private readonly route: ActivatedRoute) {
    this.noteForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(String.Empty, Validators.required),
      content: new FormControl(String.Empty, Validators.required),
      storageType: new FormControl()
    });
  }

  async ngOnInit() {
    this.model = await Object.getModelFromRoute<Note>(this.route, 'note');

    if (this.model) {
      this.noteForm.setValue(this.model);
    }
  }

  onSubmit(form: any) {
    if (!this.isSubmitting && this.noteForm.valid) {
      this.isSubmitting = true;
      Object.mapToModel<Note>(form);
    }
  }
}
