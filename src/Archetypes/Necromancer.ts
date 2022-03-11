import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private typeEnergy: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.typeEnergy = 'mana';
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType() {
    return this.typeEnergy;
  }
}