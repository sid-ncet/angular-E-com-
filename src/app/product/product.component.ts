import { Component } from '@angular/core';
import { products1 } from '../product-model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  userData:any
  item: number = 1
 
  tempPrice:number=0;
 
  constructor(private userservice: UserService) { }
  ngOnInit() {

    this.userservice.productList().subscribe((data:products1[]) => {
      this.userData = data;
   
    
    })
  
  }
  
  submit(user: any) {
    let obj = {
      id: user.id, title: user.title, description: user.description, image: user.image, price:user.price, category: user.category, item: this.item, tempPrice:this.tempPrice
    }
    obj.tempPrice=obj.price
      this.userservice.addToCart(obj)
     
  }
}