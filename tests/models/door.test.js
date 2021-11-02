const { expect } = require('chai');
const Door = require('../../models/Door');

describe('A classe porta', () => {
  describe('Deve ter propriedades estáticas', () => {
    it('Deve ter propriedade altura', () => {
      expect(Door).to.haveOwnProperty('_height');
    });

    it('Altura deve ser 1.9m', () => {
      expect(Door._height).to.be.equal(1.9);
    });

    it('Deve ter propriedade largura', () => {
      expect(Door).to.haveOwnProperty('_width');
    });

    it('Largura deve ser 0.80m', () => {
      expect(Door._width).to.be.equal(0.8);
    });
  });

  describe('Deve ter o método estático que retorna área', () => {
    it('Método deve existir', () => {
      expect(Door).to.haveOwnProperty('getArea');
    });

    it('Método deve ser uma função', () => {
      expect(Door.getArea).to.be.a('function');
    });

    it('Método deve retornar 1.52m²', () => {
      expect(Door.getArea()).to.be.equal(1.52);
    });
  });

  describe('Deve ter o método estático que retorna altura', () => {
    it('Método deve existir', () => {
      expect(Door).to.haveOwnProperty('getHeight');
    });

    it('Método deve ser uma função', () => {
      expect(Door.getHeight).to.be.a('function');
    });

    it('Método deve retornar a altura da porta', () => {
      expect(Door.getHeight()).to.be.equal(1.9);
    });
  });
});
