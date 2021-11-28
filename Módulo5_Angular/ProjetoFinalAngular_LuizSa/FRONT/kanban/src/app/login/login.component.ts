import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form!: FormGroup;
  user!: User;

  constructor(
    private fb:FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { 
    this.form = this.fb.group({
      username:['',Validators.required],
      password:['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  login() {

    const valoresFormulario = this.form.value;

    if (valoresFormulario.username && valoresFormulario.password) {
        this.authService.login(this.user)
            .subscribe(
                () => {
                    console.log("User is logged in");
                    this.router.navigateByUrl('cards');
                }
            );

            console.log(this.authService.login(this.user));

        }
  }

}