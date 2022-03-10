import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints = 60;
  name: string;
  dexterity: number;
  static instances = 0;
  constructor(name: string, dexterity: number) {
    super('Halfling', 67);
    this.name = name;
    this.dexterity = dexterity;
    Halfling.instances += 1;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}