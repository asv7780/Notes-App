import { Component, OnInit } from '@angular/core';
import { Comment } from '../../../code/models/comment';
import { Note } from '../../../code/models/note';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  public model: Note;
  public readonly dateFormat = 'dd/MM/yyyy';

  constructor(private readonly route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.model = await Object.getModelFromRoute<Note>(this.route, 'note');

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
