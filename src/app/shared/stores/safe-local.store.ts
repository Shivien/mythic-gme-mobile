import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SafeLocalStore {

  // Vérifier si nous sommes dans un environnement navigateur.
  private isUnsafe = () => (typeof window === 'undefined' || typeof localStorage === 'undefined');

  clear() {
    if (this.isUnsafe()) {
      return;
    }

    localStorage.clear();
  }

  getItem<T>(key: string): T | null {
    if (this.isUnsafe()) {
      return null;
    }

    const item = localStorage.getItem(key);
    if (item === null) {
      return null;
    }

    try {
      const parsed = JSON.parse(item);
      return parsed;
    } catch (e) {
      return null;
    }
  }

  removeItem(key: string) {
    if (this.isUnsafe()) {
      return;
    }

    localStorage.removeItem(key);
  }

  setItem(key: string, value: any) {
    if (this.isUnsafe()) {
      return;
    }

    if (value === null) {
      localStorage.removeItem(key);
      return;
    }

    const stringyfied = JSON.stringify(value);
    localStorage.setItem(key, stringyfied);
  }

}
