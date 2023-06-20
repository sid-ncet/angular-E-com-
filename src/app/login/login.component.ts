import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data:any
  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(2)]),
    password:new FormControl('',[Validators.required]),
  

  })
  constructor(private readonly userservice:UserService,private route :ActivatedRoute,private router:Router){
  }
  registerForm(){
    console.log(this.loginForm.value.username)
    if(localStorage.getItem('register')==null){
      alert('please register yourself')
      this.loginForm.reset()

    }else{
  
    this.data=JSON.parse(localStorage.getItem('register') as any)
    if(this.data[0].username==this.loginForm.value.username){
      this.router.navigate(['/cart'])
    }
    else{
      alert('username and userpassword dont match')
      this.loginForm.reset()
      this.router.navigate(['/login'])
    }
  }
  }
  signup(){
    this.router.navigate(['/signup'])
  }
  get username():FormControl{
    return this.loginForm.get('username')as FormControl
  }
}
