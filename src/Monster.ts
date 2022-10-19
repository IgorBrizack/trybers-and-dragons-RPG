import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _stregth: number;

  constructor() {
    this._lifePoints = 85;
    this._stregth = 63;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._stregth);
  }

  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) {
      this._lifePoints -= attackPoints;
      if (this._lifePoints < 0) {
        this._lifePoints = -1;
      }
    } 
    return this._lifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._stregth;
  }
}