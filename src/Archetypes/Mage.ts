import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private stamina: EnergyType;
  static magesCreated = 0;

  constructor(name:string) {
    super(name);
    this.stamina = 'mana';
    Mage.magesCreated += 1;
  }

  get energyType(): EnergyType {
    return this.stamina;
  }

  static createdArchetypeInstances():number {
    return this.magesCreated;
  }
}