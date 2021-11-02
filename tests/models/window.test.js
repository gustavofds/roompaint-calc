const { expect } = require('chai');
const Window = require('../../models/Window');

describe('A classe janela', () => {
  describe('Deve ter propriedades estáticas', () => {
    it('Deve ter propriedade altura', () => {
      expect(Window).to.haveOwnProperty('_height');
    });

    it('Altura deve ser 1.2m', () => {
      expect(Window._height).to.be.equal(1.2);
    });

    it('Deve ter propriedade largura', () => {
      expect(Window).to.haveOwnProperty('_width');
    });

    it('Largura deve ser 2m', () => {
      expect(Window._width).to.be.equal(2.0);
    });
  });

  describe('Deve ter o método estático que retorna área', () => {
    it('Método deve existir', () => {
      expect(Window).to.haveOwnProperty('getArea');
    });

    it('Método deve ser uma função', () => {
      expect(Window.getArea).to.be.a('function');
    });

    it('Método deve retornar 2.40m²', () => {
      expect(Window.getArea()).to.be.equal(2.4);
    });
  });
});
