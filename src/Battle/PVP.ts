import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
  }

  fight():number {
    let isFighting = true;
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
      if (isFighting) {
        this.player1.attack(this.player2);
        isFighting = !isFighting;
      } else {
        this.player2.attack(this.player1);
        isFighting = !isFighting;
      }
    }
    return super.fight();
  }
}

const newPvp = new PVP(new Character('Igor'), new Character('João'));
newPvp.fight();