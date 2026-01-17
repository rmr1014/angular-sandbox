import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-angular-welcome',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './angular-welcome.component.html',
  styleUrls: ['./angular-welcome.component.css']
})
export class AngularWelcomeComponent implements OnInit {
  title = 'sandbox'

  constructor() { }

  ngOnInit(): void {
  }

}
