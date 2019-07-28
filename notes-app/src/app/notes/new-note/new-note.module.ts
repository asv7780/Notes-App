import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewNoteComponent} from './new-note.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule
} from '@angular/material';
import {NoteService} from '../../../code/services/note.service';


@NgModule({
    declarations: [NewNoteComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '', component: NewNoteComponent
        }]),
        ReactiveFormsModule,
        MatRadioModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule
    ],
    providers: [NoteService]
})
export class NewNoteModule {
}
