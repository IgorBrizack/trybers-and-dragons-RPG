import { EnergyType } from '../Energy';

export default abstract class Archetype {
  readonly name: string;
  readonly special: number;
  readonly cost: number;

  constructor(name: string) {
    this.name = name;
    this.special = 0;
    this.cost = 0;
  }

  static createdArchetypeInstances():number {
    const message = 'Not implementd';
    throw Error(message);
  }

  abstract get energyType(): EnergyType;
}