import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {



  @Input() data:any[]=[]
  @Output()
  selected:EventEmitter<string>=new EventEmitter<string>();

  selectedValue:string='All'
  constructor() { }

  ngOnInit(): void {
  }
  detectChanges(event:any){
    this.selected.emit(event)
  }

  
}
