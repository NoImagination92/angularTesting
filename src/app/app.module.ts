import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LiensComponent } from './liens/liens.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';
import  { FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'recherche', component: RechercheComponent },
    { path: 'detail/:id', component:  DetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LiensComponent,
    RechercheComponent,
    ListeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot (appRoutes),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
