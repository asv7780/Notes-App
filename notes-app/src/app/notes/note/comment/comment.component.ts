import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../../../../code/models/comment';
import {CommentFormValidators} from './comment-form.validators';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

    isSubmitting = false;
    commentForm: FormGroup;
    @Output() commentCreated = new EventEmitter<Comment>(true);

    constructor() {
    }

    ngOnInit() {
        this.commentForm = new FormGroup({
            // tslint:disable-next-line:max-line-length
            author: new FormControl(String.Empty, [Validators.required, CommentFormValidators.CountOfWordsValidator(2), CommentFormValidators.WordsUppercaseValidator]),
            comment: new FormControl(String.Empty, Validators.required),
            created: new FormControl(new Date())
        });
    }

    onSubmit(form: any) {
        if (!this.isSubmitting && this.commentForm.valid) {
            this.commentCreated.emit(this.commentForm.value);
        }

    }
}
