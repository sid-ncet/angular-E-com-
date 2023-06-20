import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { products1 } from '../product-model';

@Injectable({
  providedIn: 'root'
})
export class UserService{
 public productShow=new BehaviorSubject<any>([])
  products: products1[] =[]

  constructor(private http: HttpClient) {
    // console.log(this.products)
    if(JSON.parse(localStorage.getItem('carts')as any)!=null){
      this.products=JSON.parse(localStorage.getItem('carts')as any)
      this.productShow.next(this.products)
      //console.log(this.products)
    }else{

    }
  }
 
  productList(): Observable<products1[]> {
    return this.http.get<products1[]>("https://fakestoreapi.com/products")
  }
  getProducts() {
    return this.products
  }
  saveCart() {
   localStorage.setItem('carts', JSON.stringify(this.products)) 
  }
  addToCart(addedProduct: any) {
   
    for (let i = 0; i < this.products.length; i++) {
      if (addedProduct.id == this.products[i].id) {
        // this.products[i].item++
        //this.products[i].price+= addedProduct.price
        this.saveCart()
        return
      }
    }
    this.products.push(addedProduct)
    this.productShow.next(this.products)
    this.saveCart()
    
  }
  cardLogo(){
   return this.productShow.asObservable()
  }

  loadCard() {
    this.products = JSON.parse(localStorage.getItem('carts') as any) || []
  }
  deleteItem(value: any) {
    console.log(value.id)
    for (let i = 0; i < this.products.length; i++) {
      if (value.id == this.products[i].id) {
        this.products.splice(i, 1)
        this.saveCart()
        this.productShow.next(this.products)
      }
    }
  }
}
