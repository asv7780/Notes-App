import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotesComponent} from './notes/notes.component';
import {BaseComponentsModule} from './notes/base-components/base-components.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';


import {environment} from '../environments/environment';




@NgModule({
    declarations: [
        AppComponent,
        NotesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BaseComponentsModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
