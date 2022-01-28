import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LoginComponent } from './public-components/login/login.component';
import { InternalModule } from './feature-modules/internal-components/internal.module';
import { PageNotFoundComponent } from './public-components/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LabelModule,
    InputsModule,
    ButtonsModule,
    InternalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
