import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private stamina: EnergyType;
  static rangersCreated = 0;

  constructor(name:string) {
    super(name);
    this.stamina = 'stamina';
    Ranger.rangersCreated += 1;
  }

  get energyType(): EnergyType {
    return this.stamina;
  }

  static createdArchetypeInstances():number {
    return this.rangersCreated;
  }
}