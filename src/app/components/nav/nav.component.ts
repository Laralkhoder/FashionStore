import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  navbarOpen = false;
  cart=false;

constructor(public app:AppComponent){}

  ngOnInit(){
  
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
