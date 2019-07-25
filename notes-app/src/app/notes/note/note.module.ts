import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoteComponent} from './note.component';
import {RouterModule} from '@angular/router';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {PropertyViewPipe} from '../../../code/pipes/property-view.pipe';
import {CommentComponent} from './comment/comment.component';
import {NoteService} from '../../../code/services/note.service';

@NgModule({
    declarations: [NoteComponent, PropertyViewPipe, CommentComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '', component: NoteComponent
        }]),
        ReactiveFormsModule,
        MatRadioModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [
        NoteService
    ]
})
export class NoteModule {
}
