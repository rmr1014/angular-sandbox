import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonToggleModule],
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent {
  fontStyleControl = new FormControl('');
  fontStyle?: string;
}
