import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NoteComponent } from './note.component';
import { RouterModule } from '@angular/router';
import {
  MatProgressSpinnerModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { PropertyViewPipe } from '../../../code/pipes/property-view.pipe';
import {CommentComponent} from './comment/comment.component';

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
  ]
})
export class NoteModule {
}
