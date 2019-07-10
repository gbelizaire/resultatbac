import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { BacHaitienService } from "./bac-haitien.service";

import { SaisieMatriculeComponent } from './saisie-matricule/saisie-matricule.component';
import { AfficheInfoComponent } from './affiche-info/affiche-info.component';
import { AfficheNoteComponent } from './affiche-note/affiche-note.component';


@NgModule({
  declarations: [
    AppComponent,
    SaisieMatriculeComponent,
    AfficheInfoComponent,
    AfficheNoteComponent
  ],
  imports: [
    BrowserModule,HttpModule,BrowserAnimationsModule,ToastModule.forRoot()
  ],
  providers: [BacHaitienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
