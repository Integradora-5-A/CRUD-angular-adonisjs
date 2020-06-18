import {Component, OnInit} from '@angular/core';
import {Authservice, UserDetails} from "../../../services/authservice.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: UserDetails

  constructor(private auth: Authservice) {
  }

  ngOnInit(): void {
    const current = this.auth.getUserDetails()
    this.auth.profile(current.uid).subscribe(
      user => {
        this.details = user
      },
      error => {
        console.error(error)
      }
    )
  }
}
