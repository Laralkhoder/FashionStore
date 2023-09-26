import { Component } from '@angular/core';
import { Product } from 'src/app/Model/Product';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

loader:boolean=false;

constructor(private communicationService:CommunicationService){}

allProduct:Product[]=[];
  productsInCart:any=[];
categories:any[]=[];
  quantity: number[]=[];
ngOnInit(){
  if(localStorage.getItem("cart")){
  this.productsInCart=JSON.parse(localStorage.getItem("cart")||'')}
  this.cartClicked.fill(false);

  this.getProducts()
this.getCategories()  
}


getProducts(){
  this.loader=true;
  this.communicationService.getAllProduct().subscribe((res:Product[])=>{
    console.log(res);
    this.allProduct=res;
      this.loader=false;
      this.quantity=new Array(this.allProduct.length);
this.quantity.fill(1);
console.log(this.quantity)

  })

}

getCategories() {
  this.communicationService.getCategories().subscribe((res: string[]) => {
    this.categories = res;
    console.log(this.categories)
  });
  

}
selectedCategory(e:any){
  
    let value = e.target.innerHTML.toLowerCase();
    value === 'all' ? this.getProducts() : this.getProductsByCategory(value);
  
}
getProductsByCategory(category: string) {
  this.loader=true;
  this.communicationService
    .getProductsByCategory(category)
    .subscribe((res: any) => {
      this.allProduct = res;
      this.loader=false;
    });

}
cartClicked=new Array(this.allProduct.length);
addToCart(i:any){
this.cartClicked[i]=true
}
afterAddToCart(i:any){
  if(localStorage.getItem("cart")?.includes(JSON.stringify(this.allProduct[i]))){
    alert("This product is already added to the cart")
  }
  else {this.productsInCart.push({"item":this.allProduct[i],"quantity":this.quantity[i]})
  localStorage.setItem("cart",JSON.stringify(this.productsInCart))
  }  
  this.cartClicked[i]=false
  localStorage.setItem("dot","true")

}
updateCart(){
  if(localStorage.getItem("dot")=="false"){
    localStorage.setItem("dot","true");
  }
}
}