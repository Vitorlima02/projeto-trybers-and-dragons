import Race from './Race';

export default class Orc extends Race {
  maxLifePoints = 74;
  name: string;
  dexterity: number;
  static instances = 0;
  constructor(name: string, dexterity: number) {
    super('Orc', 30);
    this.name = name;
    this.dexterity = dexterity;
    Orc.instances += 1;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}