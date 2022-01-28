import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const childrenRouts: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: '', redirectTo: '/protected/homePage', pathMatch: 'full' },
  { path: 'addNewItem', component: AddNewItemComponent },
  { path: 'editItem/:itemId', component: AddNewItemComponent },
  { path: 'items/:itemId', component: ItemDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(childrenRouts)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
