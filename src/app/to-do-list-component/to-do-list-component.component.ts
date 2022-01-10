import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class ToDoListComponentComponent implements OnInit {

  @Input() childMessage: any;
  Taskstatus: boolean=false;
  Taskstatus1: boolean=false;
  Taskstatus2: boolean=false;
  constructor() { }

  ngOnInit(): void {
  
    
  }
  changeSelection(e:any) {
    if(e.target.checked){ 
     this.Taskstatus=true
             
    }
    else{
      this.Taskstatus=false
    }
  }
  changeSelection1(e:any) {
    if(e.target.checked){ 
     this.Taskstatus1=true
             
    }
    else{
      this.Taskstatus=false
    }
  }
  changeSelection2(e:any) {
    if(e.target.checked){ 
     this.Taskstatus2=true
             
    }
    else{
      this.Taskstatus=false
    }
  }

}
