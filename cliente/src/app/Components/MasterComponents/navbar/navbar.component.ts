import {Component, OnInit} from '@angular/core';
import {Authservice} from "../../../services/authservice.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: Authservice) {
  }

  ngOnInit(): void {
  }

}
