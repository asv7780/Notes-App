import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoteComponent} from './note.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [NoteComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '', component: NoteComponent
        }])
    ]
})
export class NoteModule {
}
