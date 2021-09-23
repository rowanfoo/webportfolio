import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {PortfolioRepo} from "./repo/PortfolioRepo";

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [],
  providers: [PortfolioRepo],

})
export class RepoModule {
}
