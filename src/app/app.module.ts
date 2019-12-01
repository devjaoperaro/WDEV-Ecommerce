import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgModule, ApplicationRef} from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule  } from '@nebular/theme';
import { NbInputModule  } from '@nebular/theme';
import { NbSearchModule  } from '@nebular/theme';
import { CursoComponent } from './curso/curso.component';
import { HomeComponent } from './home/home.component';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InicialComponent } from './inicial/inicial.component';



@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    HomeComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    NbInputModule,
    NbSearchModule, 
    NbButtonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
