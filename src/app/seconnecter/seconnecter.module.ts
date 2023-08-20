import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeconnecterComponent } from './component/seconnecter/seconnecter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SeconnecterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ReactiveFormsModule
  ]
})
export class SeconnecterModule { }
