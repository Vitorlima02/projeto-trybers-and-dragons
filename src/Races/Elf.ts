import Race from './Race';

export default class Elf extends Race {
  maxLifePoints = 99;
  name: string;
  dexterity: number;
  static instances = 0;
  constructor(name: string, dexterity: number) {
    super('Elf', 88);
    this.name = name;
    this.dexterity = dexterity;
    Elf.instances += 1;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}

// Link de pesquisa em como fazer o counter de Instancias
// https://stackoverflow.com/questions/28947571/how-to-count-number-of-instances-of-a-class