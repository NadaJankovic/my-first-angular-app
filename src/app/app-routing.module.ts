import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/authentication/auth.guard';
import { LoginComponent } from './public-components/login/login.component';
import { PageNotFoundComponent } from './public-components/page-not-found/page-not-found.component'; 

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'protected', loadChildren: () => 
  import('./feature-modules/internal-components/internal.module')
  .then(m=> m.InternalModule), canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};
