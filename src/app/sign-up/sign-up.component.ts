import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth-service/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {

  @Input() name: string;

  @Input() email: string;

  @Input() password: string;

  @Input() date:Date;

  @Input() g: string;

  @Output() signUpEvent: EventEmitter <string> = new EventEmitter();

  @Output() loginEvent: EventEmitter<string> = new EventEmitter();

  SignUp() {
    this.signUpEvent.emit('Registration Successfull');
  };

  login() {
    this.loginEvent.emit('Navigate to login component');
  };

  genders = ["Male", "Female"];
  signUpForm: FormGroup;
  isLoading: Boolean = false;
  error: string = null;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      dateOfBirth: new FormControl(null, Validators.required),
      gender: new FormControl("Male"),
    });
  }
  onSubmit() {
    if (!this.signUpForm.valid) {
      return;
    }
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    //console.log(this.signUpForm.value.userName);
    this.isLoading = true;
    this.authService.signup(email, password).subscribe(
      (data) => {
        console.log(data);
        this.isLoading = false;
        this.router.navigate(["/welcome", "signedUp"]);
      },
      (errorMessage: any) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    this.signUpForm.reset();
  }
}
