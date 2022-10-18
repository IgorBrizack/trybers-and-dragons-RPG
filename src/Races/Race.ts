export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  static racesCreated = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race.racesCreated += 1;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances():number {
    const message = 'Not implemented';
    throw Error(message);
  }

  abstract get maxLifePoints(): number;
}