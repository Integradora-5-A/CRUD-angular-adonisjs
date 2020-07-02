import { Component } from '@angular/core';
import {Authservice} from './services/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(public auth: Authservice) {
  }
}
