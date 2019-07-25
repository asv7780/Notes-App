import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewNoteComponent} from './new-note.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule} from '@angular/material';


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
        MatInputModule,
        MatButtonModule
    ]
})
export class NewNoteModule {
}
