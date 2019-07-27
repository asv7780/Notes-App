import {Component, OnInit} from '@angular/core';
import {Comment} from '../../../code/models/comment';
import {Note} from '../../../code/models/note';
import {ActivatedRoute} from '@angular/router';
import {NoteService} from '../../../code/services/note.service';

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
    public model: Note;
    public readonly dateFormat = 'dd/MM/yyyy';


    constructor(private readonly route: ActivatedRoute,
                private service: NoteService) {
    }

    async ngOnInit() {
        const id = await this.route.snapshot.paramMap.get('id');
        this.model = this.service.getData().find(i => i.id.toString() === id);
        console.log(this.model);

        if (!this.model) {
            alert('Received empty data!');
        }
    }


    public onCommentCreated(comment: Comment) {
        if (this.model) {
            this.model.comments.push(comment);
        }
    }
}
