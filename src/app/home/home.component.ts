import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  value:any
  constructor(private userservice:UserService){}
  ngOnInit(){
    //it is defined in behavior subject to subscribe value
    this.userservice.cardLogo().subscribe((data)=>{
      this.value=data.length;
    })
  
  }


  

}
