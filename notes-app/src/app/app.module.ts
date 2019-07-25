import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotesComponent} from './notes/notes.component';
import {BaseComponentsModule} from './notes/base-components/base-components.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        NotesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BaseComponentsModule,
        BrowserAnimationsModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
