import { Component, EventEmitter, input, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  text = input<string>();
  color = input<string>();
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
