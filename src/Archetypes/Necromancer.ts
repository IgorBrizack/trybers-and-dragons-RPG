import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private stamina: EnergyType;
  static necromancersCreated = 0;

  constructor(name:string) {
    super(name);
    this.stamina = 'mana';
    Necromancer.necromancersCreated += 1;
  }

  get energyType(): EnergyType {
    return this.stamina;
  }

  static createdArchetypeInstances():number {
    return this.necromancersCreated;
  }
}