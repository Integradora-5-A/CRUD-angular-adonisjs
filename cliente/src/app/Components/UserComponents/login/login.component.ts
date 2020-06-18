import {Component, OnInit} from '@angular/core';
import {Authservice, TokenPayload} from "../../../services/authservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  }

  constructor(private auth: Authservice, private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile')
      },
      error => {
        console.error(error)
      }
    )
  }
}
