import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comment } from '../../../../code/models/comment';
import { CommentFormValidators } from './comment-form.validators';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  model: Comment;
  isSubmitting = false;
  commentForm: FormGroup;

  @Output() onCommentCreated = new EventEmitter<Comment>(true)

  constructor() {
  }

  ngOnInit() {
    this.commentForm = new FormGroup({
      author: new FormControl(String.Empty, [Validators.required, CommentFormValidators.CountOfWordsValidator(2), CommentFormValidators.WordsUppercaseValidator]),
      comment: new FormControl(String.Empty, Validators.required),
      created: new FormControl(new Date())
    });
  }

  onSubmit(form: any) {
    if (!this.isSubmitting && this.commentForm.valid) {
      this.isSubmitting = true;
      this.onCommentCreated.emit(Object.mapToModel<Comment>(form));
    }
  }
}
