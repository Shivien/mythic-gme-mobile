import { Component } from '@angular/core';

interface TableModel {
  headers: string[];
  rows: Array<Array<string | number>>;
}

@Component({
  selector: 'app-dungeon-generator',
  imports: [],
  templateUrl: './dungeon-generator.html',
  styleUrl: './dungeon-generator.scss',
})
export default class DungeonGenerator {

  protected startingArea: TableModel = {
    headers: ['d10', 'Configuration'],
    rows: [
      [1, "Carrée, 6x6 m ; un passage dans chaque mur"],
      [2, "Carrée, 6x6 m ; deux murs percés d'une porte, un passage s'ouvre dans un autre"],
      [3, "Carrée 12x12 m ; trois murs percés d'une porte"],
    ],
  };

}
