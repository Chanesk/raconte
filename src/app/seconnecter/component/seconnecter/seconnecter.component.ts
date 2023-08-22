import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, pipe } from 'rxjs';
import { User } from 'src/app/core/model/user.model';
import { UserService } from 'src/app/core/service/users.service';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.scss'],
})
export class SeconnecterComponent implements OnInit {
  raconteForm!: FormGroup;
  passwordRegex!: RegExp;
  emailRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!/]).*$/;
    this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    this.raconteForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.pattern(this.emailRegex)]],
      password: [
        null,
        [Validators.required, Validators.pattern(this.passwordRegex)],
      ],
    });
  }
  onSubmitUser(): void {
    this.userService.signin(this.raconteForm.value).subscribe(
      (data: any) => console.log(data),
      (err: any) => console.log(err)
    );
    console.log(this.raconteForm.value);
  }
}
