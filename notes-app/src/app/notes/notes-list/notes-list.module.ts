import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from './notes-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [NotesListComponent],
  imports: [
    CommonModule,
      RouterModule.forChild([{
        path: '', component: NotesListComponent
      }])
  ]
})
export class NotesListModule { }
