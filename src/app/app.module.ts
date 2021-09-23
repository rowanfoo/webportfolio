import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MaterialModule} from "./material.module";
import {RepoModule} from "../repo/repo.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {RouterModule} from "@angular/router";
import {MainComponent} from './main/main.component';
import {DataTablesModule} from "angular-datatables";

const routes = [
  {path: '', component: AppComponent},
  {path: 'pp', component: PortfolioComponent},

  {
    path: 'portfolio', component: MainComponent, children: [
      {path: 'home', component: PortfolioComponent},

    ]


  },


]

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RepoModule,
//    FormsModule,
    DataTablesModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
