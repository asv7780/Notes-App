import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotesListComponent} from './notes-list.component';
import {RouterModule} from '@angular/router';
import {
    MAT_DIALOG_DATA,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import {NoteService} from '../../../code/services/note.service';

@NgModule({
    declarations: [NotesListComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '', component: NotesListComponent
        }]),
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatOptionModule,
        MatSelectModule,
        // EditNoteModule
    ],
    providers: [NoteService,
        {provide: MAT_DIALOG_DATA, useValue: {}}]
})
export class NotesListModule {
}
