import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  data:any=[]
  constructor(private route :ActivatedRoute,private router:Router){}
  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(2)]),
    password:new FormControl('',[Validators.required]),
    usermobile:new FormControl('',[Validators.required])

  })
  registerForm(){
    console.log(this.loginForm.value)
    alert('Register the data successfully and login the form')
    this.data.push(this.loginForm.value)
    localStorage.setItem('register',JSON.stringify(this.data))
    this.router.navigate(['/login'])
  }
  get username():FormControl{
    return this.loginForm.get('username')as FormControl
  }
  get password():FormControl{
    return this.loginForm.get('password')as FormControl
  }

}
