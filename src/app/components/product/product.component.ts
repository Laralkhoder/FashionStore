import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {



data:any;
id:any;
rate:any;
stars:any[]=[];
emptyStars:any[]=[];
load:boolean=true;
quantity=1;
cart:any[]=[];
inTheCart:boolean=false;
constructor(private activatedRoute:ActivatedRoute, private communicationService:CommunicationService){}

ngOnInit(){
this.id=this.activatedRoute.snapshot.paramMap.get('id');
this.getProduct();

}

getProduct(){
  this.communicationService.getProductById(this.id).subscribe((res)=>{
  this.data=res;
  console.log(this.data)
  this.rate=Math.round(this.data.rating.rate);
  this.stars=new Array(this.rate);
  this.emptyStars=new Array(5-this.rate);
  if(localStorage.getItem("cart")){
  this.cart.push(JSON.parse(localStorage.getItem("cart")||''));
  this.cart=this.cart[0]
  console.log(this.cart)
this.cart.forEach((ele)=>{
  if(this.id==ele.item.id){
    this.quantity=ele.quantity
    this.inTheCart=true
  }
})}
  this.load=false;
  })
  }
  addToCart(){
    if(this.inTheCart){
      alert("This product is already added to the cart")  
    }
    else{
this.cart.push({"item":this.data,"quantity":this.quantity})
console.log(this.cart)
localStorage.setItem("cart",JSON.stringify(this.cart))
localStorage.setItem("dot","true")
    }
  }

  minus(){
    if(this.quantity>1){
this.quantity--;}
  }

  plus(){
this.quantity++;
  }

}
