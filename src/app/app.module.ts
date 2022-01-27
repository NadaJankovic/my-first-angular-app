import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './feature-modules/internal-components/home-page/home-page.component';
import { NavBarComponent } from './feature-modules/internal-components/nav-bar/nav-bar.component';
import { AddNewItemComponent } from './feature-modules/internal-components/add-new-item/add-new-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { SharedItemsDataService } from './local-storage-service/shared-items-data.service';
import { ItemDetailsComponent } from './feature-modules/internal-components/item-details/item-details.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { InternalModule } from './feature-modules/internal-components/internal.module';
import { InternalRoutingModule } from './feature-modules/internal-components/internal-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
    InternalRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
