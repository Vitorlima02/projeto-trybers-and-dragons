import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private typeEnergy: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.typeEnergy = 'stamina';
    Warrior.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType() {
    return this.typeEnergy;
  }
}