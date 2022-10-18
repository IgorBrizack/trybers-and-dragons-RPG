import Race from './Race';

export default class Elf extends Race {
  private health: number;
  static elfCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.health = 99;
    Elf.elfCreated += 1;
  }

  get maxLifePoints(): number {
    return this.health;
  }

  static createdRacesInstances():number {
    return this.elfCreated;
  }
}