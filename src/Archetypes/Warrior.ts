import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private stamina: EnergyType;
  static warriorsCreated = 0;

  constructor(name:string) {
    super(name);
    this.stamina = 'stamina';
    Warrior.warriorsCreated += 1;
  }

  get energyType(): EnergyType {
    return this.stamina;
  }

  static createdArchetypeInstances():number {
    return this.warriorsCreated;
  }
}