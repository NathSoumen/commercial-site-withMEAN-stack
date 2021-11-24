import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
const userRoutes:Routes = [
    {
        path:'',redirectTo:"login",pathMatch:'full'
    },{
        path:"login",component:UserLoginComponent
    },
    {path:'signup',component:UserSignupComponent}
]

@NgModule({
  declarations: [
    UserLoginComponent,
    UserSignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule,    
  ],
  providers: [],
  exports:[ UserLoginComponent,UserSignupComponent]
})
export class UserFormModule { 

  constructor() {
    console.log("user form  moudle started");
    
  }
}
