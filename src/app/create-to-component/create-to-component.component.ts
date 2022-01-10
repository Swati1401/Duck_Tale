import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import {Record} from './DuckRecord'
@Component({
  selector: 'app-create-to-component',
  templateUrl: './create-to-component.component.html',
  styleUrls: ['./create-to-component.component.css']
})
export class CreateToComponentComponent implements OnInit {

  allRecord: any;
  repeatingTaskdetails=[{opt:'Yes',val:"Y"},{opt:'No',val:"N"}]

  user: User = {
    taskname:"",
  taskDes:"",
   repeatingTask: this.repeatingTaskdetails
  };

 

  constructor(  private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
   
  }
  submit(value:any){
  this.allRecord=value;
  console.log(  this.allRecord);
  
  }

  
}
export interface User {
  taskname:string,
  taskDes:string,
   repeatingTask: any
}

