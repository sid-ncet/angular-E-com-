import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})
export class CartComponent {

  constructor(private userservice: UserService,private router:Router) { }
  cartView: any
  sum: number = 0;

  
  ngOnInit() {
    this.showData()

  }
  showData() {
    this.sum = 0
    this.userservice.loadCard()
    this.cartView = this.userservice.getProducts()
    //console.log(this.cartView)
    
    for (var i = 0; i < this.cartView.length; i++) {
      this.sum = parseFloat((this.sum + this.cartView[i].tempPrice).toFixed(2))
    }
  }
  delete(value: any) {
    //console.log(value)
    this.userservice.deleteItem(value)
    console.log(this.cartView)
    this.showData()
  }
  plus(data: any) {
    let value=0
    for (var i = 0; i < this.cartView.length; i++) {
     
      if (data.id == this.cartView[i].id) {
        this.cartView[i].item++
        value=parseFloat(value+(data.price*data.item).toFixed(2))
        this.cartView[i].tempPrice=value;
      }
       this.userservice.saveCart()
    }
    this.showData()
  }
  minus(data: any) {
    let value=0
    for (var i = 0; i < this.cartView.length; i++) {
      if (data.id == this.cartView[i].id) {
        if (data.item != 1) {
          this.cartView[i].item--
          value=parseFloat((data.price*data.item-value).toFixed(2))
          
          this.cartView[i].tempPrice=value;
        }
      }
      this.userservice.saveCart()
    }
    this.showData()
  }
  buy(data:any){
    this.router.navigate(['/cardDetail'])
  }
}