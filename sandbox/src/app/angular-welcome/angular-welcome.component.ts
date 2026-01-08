import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-angular-welcome',
    templateUrl: './angular-welcome.component.html',
    styleUrls: ['./angular-welcome.component.css'],
    standalone: false
})
export class AngularWelcomeComponent implements OnInit {
  title = 'sandbox'

  constructor() { }

  ngOnInit(): void {
  }

}
