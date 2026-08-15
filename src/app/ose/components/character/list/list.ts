import { Component, inject, OnInit, signal } from '@angular/core';
import { CharacterService } from '../../../services/character.service';
import { CharacterModel } from '../../../models/character.model';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export default class List implements OnInit {
  private readonly characterService = inject(CharacterService);

  protected readonly errorMessage = signal<string | null>(null);
  protected readonly loading = signal<boolean>(true);
  protected readonly list = signal<CharacterModel[]>([]);

  ngOnInit(): void {
    this.loadCharacterList();
  }

  private loadCharacterList() {
    this.loading.set(true);
    this.characterService.list().subscribe({
      next: value => {
        this.list.set(value);
        this.loading.set(false);
      },
      error: error => {
        console.error(error);
        this.errorMessage.set('Error lors du chargement de la liste des personnages.');
        this.loading.set(false);
      },
    });
  }

}
