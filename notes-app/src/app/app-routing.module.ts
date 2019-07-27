import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotesComponent} from './notes/notes.component';

const routes: Routes = [
    {
        path: '',
        component: NotesComponent,
        children: [
            {
                path: '',
                loadChildren: './notes/about/about.module#AboutModule'
            },
            {
                path: 'new-note',
                loadChildren: './notes/new-note/new-note.module#NewNoteModule'
            },
            {
                path: 'note/:id',
                loadChildren: './notes/note/note.module#NoteModule'
            },
            {
                path: 'notes-list',
                loadChildren: './notes/notes-list/notes-list.module#NotesListModule'
            },
            {
                path: 'edit-note/:id',
                loadChildren: './notes/edit-note/edit-note.module#EditNoteModule'
            }
        ],
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
