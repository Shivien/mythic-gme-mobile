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
interface SectionModel {
  name: string | null;
  links: LinkModel[];
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

  protected readonly sections: SectionModel[] = [
    {
      name: null,
      links: [
        { route: '/', label: 'Accueil', icon: 'home' },
        { route: '/fate-chart', label: 'Destin', icon: 'grid_on' },
      ]
    },
    {
      name: 'Old School Essentials',
      links: [
        { route: '/ose/xp-calculator', label: 'Calculateur d\'XP', icon: 'calculate' },
        { route: '/ose/dungeon-generator', label: 'Générateur de donjon', icon: 'fort' },
        { route: '/ose/character', label: 'Personnages', icon: 'person' },
      ]
    }
  ];
}
