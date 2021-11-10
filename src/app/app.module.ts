import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddNewItemComponent } from './components/add-new-item/add-new-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { SharedItemsDataService } from './local-storage-service/shared-items-data.service';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    PageNotFoundComponent,
    AddNewItemComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    StorageServiceModule,
    ReactiveFormsModule,
    FormsModule,
    LabelModule,
    InputsModule,

  ],
  providers: [SharedItemsDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
