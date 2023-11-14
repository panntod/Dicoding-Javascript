/**
 * TODO 1 (Tiger.js):
 * Ekspor nilai dari class Tiger
 *
 * TODO 2 (Wolf.js)
 * Ekspor nilai dari class Wolf
 * TODO 3 (main.js)
 * Impor class Tiger dan Wolf
 * TODO 4 (main.js)
 * Ekspor fungsi fight, myTiger, myWolf, dan result
 *
 */

// TODO 1
class Tiger {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
  
    growl() {
      return 'grrrrrrr';
    }
  }
  
  // TODO 1
  module.exports = Tiger

// TODO 2
class Wolf {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
  
    howl() {
      return 'Auuuuuuuuu';
    }
  }
  
  // TODO 2
  module.exports = Wolf

// TODO 3

const Tiger = require('./Tiger')
const Wolf = require('./Wolf')

const fight = (tiger, wolf) => {
 if (tiger.strength > wolf.strength) {
   return tiger.growl();
 }
 if (wolf.strength > tiger.strength) {
   return wolf.howl();
 }
 return 'Harimau dan serigala sama-sama kuat!';
};

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);

// TODO 4
module.exports = {myTiger, myWolf, result, fight}