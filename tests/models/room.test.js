const { expect } = require('chai');
const Room = require('../../models/Room');
const Wall = require('../../models/Wall');

describe('A classe sala', () => {
  describe('Deve ter propriedades não estáticas', () => {
    it('Não deve ter propriedade estática altura', () => {
      expect(Room).not.to.haveOwnProperty('height');
    });

    it('Não deve ter propriedade estática largura', () => {
      expect(Room).not.to.haveOwnProperty('window');
    });
  });

  describe('Instância deve ter', () => {
    let sala;

    beforeEach(() => {
      const parede1 = new Wall(2, 2, 0, 0);
      const parede2 = new Wall(2, 2, 0, 0);
      const parede3 = new Wall(2, 2, 0, 0);
      const parede4 = new Wall(2, 2, 0, 0);

      sala = new Room([parede1, parede2, parede3, parede4]);
    });

    describe('Propriedade com todas as paredes', () => {
      it('Existe', () => {
        expect(sala).to.haveOwnProperty('wallsArray');
      });

      it('É um array', () => {
        expect(sala.wallsArray).to.be.an('array');
      });
    });

    describe('Método que retorna a área total "pintável"', () => {
      it('Existe', () => {
        expect(Room.prototype).to.haveOwnProperty('getTotalPaintableArea');
      });

      it('Deve retornar 16m²', () => {
        expect(sala.getTotalPaintableArea()).to.be.equal(16);
      });
    });

    describe('Método que retorna as latas de tinta necessárias', () => {
      it('Existe', () => {
        expect(Room.prototype).to.haveOwnProperty('calcPaintQty');
      });

      it('Deve retornar um objeto', () => {
        expect(sala.calcPaintQty()).to.be.an('object');
      });

      it('Deve ter propriedades referentes as latas de tinta', () => {
        expect(sala.calcPaintQty()).to.haveOwnProperty('gal18');
        expect(sala.calcPaintQty()).to.haveOwnProperty('gal3d6');
        expect(sala.calcPaintQty()).to.haveOwnProperty('gal2d5');
        expect(sala.calcPaintQty()).to.haveOwnProperty('gal0d5');
      });

      it('Propriedades referentes as latas de tinta devem ter quantidade correta', () => {
        expect(sala.calcPaintQty().gal18).to.be.equal(0);
        expect(sala.calcPaintQty().gal3d6).to.be.equal(0);
        expect(sala.calcPaintQty().gal2d5).to.be.equal(1);
        expect(sala.calcPaintQty().gal0d5).to.be.equal(2);
      });
    });
  });
});
