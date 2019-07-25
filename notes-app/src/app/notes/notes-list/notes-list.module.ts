import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from './notes-list.component';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from "@angular/material";

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
    MatPaginatorModule
  ]
})
export class NotesListModule { }
