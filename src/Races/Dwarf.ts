import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints = 80;
  name: string;
  dexterity: number;
  static instances = 0;
  constructor(name: string, dexterity: number) {
    super('Dwarf', 20);
    this.name = name;
    this.dexterity = dexterity;
    Dwarf.instances += 1;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}

// Link de pesquisa em como fazer o counter de Instancias
// https://stackoverflow.com/questions/28947571/how-to-count-number-of-instances-of-a-class