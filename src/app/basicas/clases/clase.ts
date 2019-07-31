import { NumberFormatStyle } from '@angular/common';

export class Jugador {

  hp: NumberFormatStyle;

  constructor() {
    this.hp = 100;
  }

  recibeDanio(danio: number) {

    if (danio >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - danio;
    }
    return this.hp;
  }
}
