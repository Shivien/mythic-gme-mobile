import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface LinkModel {
  route: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-toolbar',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {
  protected readonly opened = signal<boolean>(false);

  protected readonly links = signal<LinkModel[]>([
    { route: '/', label: 'Accueil', icon: 'home' },
    { route: '/fate-chart', label: 'Destin', icon: 'grid_on' },
  ]);
}
