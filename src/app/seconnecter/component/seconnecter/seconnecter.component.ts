import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.scss']
})
export class SeconnecterComponent implements OnInit{
  raconteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.raconteForm= this.formBuilder.group({
      email:[null],
      password:[null]
    })
  }
  onSubmitUser(){
    console.log(this.raconteForm.value);
    
  }

}
