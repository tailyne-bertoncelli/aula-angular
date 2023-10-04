import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaListComponent,
    MenuSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
