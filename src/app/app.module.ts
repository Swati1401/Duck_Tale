import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateToComponentComponent } from './create-to-component/create-to-component.component';
import { ToDoListComponentComponent } from './to-do-list-component/to-do-list-component.component';
import { DoneListComponentComponent } from './done-list-component/done-list-component.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  
  declarations: [
    AppComponent,
    CreateToComponentComponent,
    ToDoListComponentComponent,
    DoneListComponentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
