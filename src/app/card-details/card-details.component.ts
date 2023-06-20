import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  paymentForm=new FormGroup({
    name:new FormControl('',),
  })
  SaveCardDetails(){
    console.log(this.paymentForm)
  }

}
