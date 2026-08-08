import { Component } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatIconButton, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
