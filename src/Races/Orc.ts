import Race from './Race';

export default class Orc extends Race {
  maxLifePoints = 60;
  constructor() {
    super('Orc', 30);
  }
}