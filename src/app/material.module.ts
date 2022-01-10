import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
    imports:[
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatSidenavModule,
        MatStepperModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatTableModule,
 
        MatSelectModule,
        MatChipsModule,
        MatDividerModule,
        MatRadioModule,
        MatAutocompleteModule,
     
        MatDialogModule,
        ScrollingModule
    ],
    exports:[
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatSidenavModule,
        MatStepperModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatTableModule,

        MatSelectModule,
        MatChipsModule,
        MatDividerModule,
        MatRadioModule,
        MatAutocompleteModule,
  
        ScrollingModule
    ]
})
export class MaterialModule {

}