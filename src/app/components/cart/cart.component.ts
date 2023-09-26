import { Component } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartProducts:any[]=[];
  fetchingMode: boolean=false;
TotalPrice:number=0;
  empty=true;
  ordered=false;
constructor(private service:CommunicationService){

}

  ngOnInit(): void {
    if(localStorage.getItem("cart")){
      this.empty=false;
    this.ordered=false;
    this.cartProducts.push(JSON.parse(localStorage.getItem("cart")|| '{}'));
    this.cartProducts[0].map((ele:any)=>{
this.TotalPrice+=((ele.quantity * ele.item.price) )
    })
  }
console.log(this.cartProducts[0])
}

deleteFromCart(i:any){
  let itemPrice=this.cartProducts[0][i].item.price;
  let itemQuantity=this.cartProducts[0][i].quantity;
this.TotalPrice=((this.TotalPrice-(itemPrice*itemQuantity)))
  if(this.cartProducts[0].length>1){
this.cartProducts[0].splice(i,1);
localStorage.setItem("cart",JSON.stringify(this.cartProducts[0]))}
else{
  this.cartProducts[0].splice(i,1);
  console.log("empty")
  localStorage.removeItem("cart")
  localStorage.setItem("dot","false")
  this.empty=true
}
}
minus(i:any){
  if(this.cartProducts[0][i].quantity>1){
this.cartProducts[0][i].quantity--;
this.TotalPrice-=this.cartProducts[0][i].item.price}

}
plus(i:any){
  this.cartProducts[0][i].quantity++;
  this.TotalPrice+=this.cartProducts[0][i].item.price

}
Order(){
  this.cartProducts[0]=[]
  localStorage.clear();
  this.empty=false;
  this.ordered=true;
  localStorage.setItem("dot","false")
}
}
