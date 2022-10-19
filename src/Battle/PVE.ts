import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private fighter: Fighter,
    private monsters: Array<Fighter | SimpleFighter>,
  ) {
    super(fighter);
  }

  fight(): number {
    this.monsters.forEach((el) => {
      while (this.fighter.lifePoints > 0 && el.lifePoints > 0) { 
        this.fighter.attack(el);
        el.attack(this.fighter);
      }
    });
    if (this.fighter.lifePoints < 0) return -1;
    return 1;
  }

  // monstersHp(): number {
  //   const HP = this.monsters.reduce((
  //     acc: number,
  //     el: Fighter | SimpleFighter,
  //   ) =>
  //     acc + el.lifePoints, 0);
  //   return HP;
  // }
}