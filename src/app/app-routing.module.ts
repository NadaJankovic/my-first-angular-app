import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewItemComponent } from './components/add-new-item/add-new-item.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'addNewItem', component: AddNewItemComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'editItem/:itemId', component: AddNewItemComponent },
  { path: 'items/:itemId', component: ItemDetailsComponent },
  {path: '', redirectTo: '/homePage', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};
