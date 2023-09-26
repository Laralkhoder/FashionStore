import { Component } from '@angular/core';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  constructor(private communicationService:CommunicationService){}

  ngOnInit(){
    this.communicationService.getAllProduct().subscribe((res)=>{
      console.log(res);
      console.log(res[0])
    });
  }
  public localStorageItem(state: string): string {
    return (localStorage.getItem(state)||'');
}
}
