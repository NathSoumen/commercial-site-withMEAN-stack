import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserFormServiceService } from 'src/app/service/user-form-service.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  registerForm!:FormGroup
  emailList:any = []
  constructor(private api:UserFormServiceService, private route:Router) { }
 
  ngOnInit(): void {
    this.getAllUsers()
    this.registerForm = new FormGroup({
      username:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required]),
      mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
      password: new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      confirm: new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
    })
  }
  submit(){
    console.log("clierk")
    console.log(this.registerForm.value);
    this.api.registerCall(this.registerForm.value).subscribe((result:any) => {
      console.log(result);
      if(result.success === true) {
        this.registerForm.reset();
        this.route.navigate(['user/login'])
      }
      
    })
  }

  getAllUsers(){
    this.api.getAllUsers().subscribe((data:any) => {
      if(data.success === true) {
        data.users.forEach((e:any) => {
          this.emailList.push(e.email)
        });
        console.log(this.emailList);
        
      }
    })
  }
  isFormFill(){
    let pass = this.registerForm.controls.password?.valid
    let conf = this.registerForm.controls.confirm?.valid
    let user = this.registerForm.controls.username?.valid
    let mobile = this.registerForm.controls.mobile?.valid
    let country = this.registerForm.controls.country?.valid
    let email = this.registerForm.controls.email?.valid
    let result = (pass && conf && user && mobile && country && email && this.passMatch())
   
    // console.log('user',user);
    // console.log('mobile',mobile);
    // console.log('country',country);
    // console.log('email',email);
    // console.log('pass',pass);
    // console.log('conf',conf);
    // console.log('passmatch',this.passMatch());
    // console.log("result", result);
    
    return !result

    
  }
  checkInput(){
    this.isFormFill()
  }
  passMatch(){
    if(this.registerForm.controls.confirm?.valid  === true) {
      if(this.registerForm.value.password == this.registerForm.value.confirm) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
   
  }

}
