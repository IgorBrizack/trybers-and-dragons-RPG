import Race from './Race';

export default class Dwarf extends Race {
  private health: number;
  static dwardCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.health = 80;
    Dwarf.dwardCreated += 1;
  }

  get maxLifePoints(): number {
    return this.health;
  }

  static createdRacesInstances():number {
    return this.dwardCreated;
  }
}