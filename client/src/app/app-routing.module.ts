import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorNotFoundComponent } from './components/Screen/error-not-found/error-not-found.component';
import { HomeComponent } from './components/Screen/home/home.component';


const routes: Routes = [
  {
    path:'', redirectTo:"home", pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:"user",loadChildren: () => import('./components/Screen/userForm/userForm.module').then( m => m.UserFormModule)
  },  
  {
    path:"**",component:ErrorNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
