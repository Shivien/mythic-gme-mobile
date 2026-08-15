import { Injectable } from "@angular/core";
import { SafeLocalStore } from "../../shared/stores/safe-local.store";
import { CharacterModel } from "../models/character.model";
import { Observable } from "rxjs";

const LOCALSTORAGEKEY_CHARACTERS = '/ose/characters';

@Injectable({
  providedIn: 'root',
})
export class CharacterStore extends SafeLocalStore {

  private Character(name: string) {
    const list = this.CharacterList();
    if (list === null) {
      return null;
    }
    const character = list?.find(c => c.name === name);
    if (character === undefined) {
      return null;
    }
    return character;
  }

  public CharacterAsync(name: string) {
    return new Observable<CharacterModel>(subscriber => {
      setTimeout(_ => {
        const character = this.Character(name);
        if (character === null) {
          subscriber.error('Character not found.');
          return;
        }
        subscriber.next(character);
        subscriber.complete();
      }, 0);
    });
  }

  private CharacterList() {
    return this.getItem<CharacterModel[]>(LOCALSTORAGEKEY_CHARACTERS);
  }

  public CharacterListAsync() {
    return new Observable<CharacterModel[]>(subscriber => {
      setTimeout(_ => {
        const list = this.CharacterList();
        if (list === null) {
          subscriber.error('Character list not found.');
          return;
        }
        subscriber.next(list);
        subscriber.complete();
      }, 0);
    });
  }

  private CharacterSave(character: CharacterModel) {
    const list = this.CharacterList() ?? [];
    if (character.id === null) {
      character.id = Math.max(0, ...list.map(c => c.id!)) + 1;
    }
    const newList = [...list.filter(c => c.name !== character.name), character];
    this.setItem(LOCALSTORAGEKEY_CHARACTERS, newList);
  }

  public CharacterSaveAsync(character: CharacterModel) {
    return new Observable<void>(subscriber => {
      setTimeout(_ => {
        this.CharacterSave(character);
        subscriber.complete();
      }, 0);
    });
  }

}
