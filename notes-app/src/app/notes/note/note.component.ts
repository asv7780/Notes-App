import {Component, OnInit} from '@angular/core';
import {Comment} from '../../../code/models/comment';
import {Note} from '../../../code/models/note';
import {ActivatedRoute} from '@angular/router';
import {NoteService} from '../../../code/services/note.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
    public model: Note = new Note();
    public readonly dateFormat = 'dd/MM/yyyy';
    public form = new FormGroup({
        name: new FormControl(String.Empty, Validators.required),
        content: new FormControl(String.Empty, Validators.required),
        comments: new FormControl()
    });

    constructor(private readonly route: ActivatedRoute,
                private service: NoteService) {
    }

    async ngOnInit() {
        const id = await this.route.snapshot.paramMap.get('id');
        this.model = this.service.getData().find(i => i.id.toString() === id);
        this.form.get('name').setValue(this.model.name);
        this.form.get('content').setValue(this.model.content);

        if (!this.model) {
            alert('Received empty data!');
        }
    }


    public onCommentCreated(comment: Comment) {
        if (this.model) {
            this.model.comments.push(comment);
        }
    }

    public saveChanges() {
        if (this.form.valid) {
            this.model.name = this.form.get('name').value;
            this.model.content = this.form.get('content').value;
        }
    }

    public deleteComment(i: number) {
        this.model.comments.splice(i, 1);
    }
}
