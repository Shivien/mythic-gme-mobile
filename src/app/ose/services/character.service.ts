import { inject, Injectable } from "@angular/core";
import { CharacterStore } from "../stores/character.store";

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly characterStore = inject(CharacterStore);

  public list() {
    return this.characterStore.CharacterListAsync();
  }

}