const { expect } = require('chai');
const Wall = require('../../models/Wall');
const AppError = require('../../utils/AppError');

describe('A classe parede', () => {
  describe('Deve ter propriedades não estáticas', () => {
    it('Não deve ter propriedade estática altura', () => {
      expect(Wall).not.to.haveOwnProperty('height');
    });

    it('Não deve ter propriedade estática largura', () => {
      expect(Wall).not.to.haveOwnProperty('window');
    });
  });

  describe('Instância deve ter propriedades', () => {
    const paredeDeTeste = new Wall(3, 5, 1, 0);

    describe('Propriedade altura', () => {
      it('Deve existir', () => {
        expect(paredeDeTeste).to.haveOwnProperty('height');
      });

      it('Deve ser 3m', () => {
        expect(paredeDeTeste.height).to.be.equal(3);
      });
    });

    describe('Propriedade largura', () => {
      it('Deve existir', () => {
        expect(paredeDeTeste).to.haveOwnProperty('width');
      });

      it('Deve ser 3m', () => {
        expect(paredeDeTeste.width).to.be.equal(5);
      });
    });

    describe('Propriedade número de portas', () => {
      it('Deve existir', () => {
        expect(paredeDeTeste).to.haveOwnProperty('doorCount');
      });

      it('Deve ser 1', () => {
        expect(paredeDeTeste.doorCount).to.be.equal(1);
      });
    });
    describe('Propriedade número de janelas', () => {
      it('Deve existir', () => {
        expect(paredeDeTeste).to.haveOwnProperty('windowCount');
      });

      it('Deve ser 0', () => {
        expect(paredeDeTeste.windowCount).to.be.equal(0);
      });
    });
  });

  describe('Instância deve ter métodos', () => {
    const paredeDeTeste2 = new Wall(3, 10, 1, 1);

    describe('Método que retorna a área total', () => {
      it('Método deve existir no protótipo', () => {
        expect(Wall.prototype).to.haveOwnProperty('getTotalArea');
      });

      it('Método deve ser uma função', () => {
        expect(paredeDeTeste2.getTotalArea).to.be.a('function');
      });

      it('Método deve retornar 30m²', () => {
        expect(paredeDeTeste2.getTotalArea()).to.be.equal(30);
      });
    });

    describe('Método que retorna a área das portas da parede', () => {
      it('Método deve existir no protótipo', () => {
        expect(Wall.prototype).to.haveOwnProperty('getDoorsArea');
      });

      it('Método deve ser uma função', () => {
        expect(paredeDeTeste2.getDoorsArea).to.be.a('function');
      });

      it('Método deve retornar 1.52m²', () => {
        expect(paredeDeTeste2.getDoorsArea()).to.be.equal(1.52);
      });
    });

    describe('Método que retorna a área das janelas da parede', () => {
      it('Método deve existir no protótipo', () => {
        expect(Wall.prototype).to.haveOwnProperty('getWindowsArea');
      });

      it('Método deve ser uma função', () => {
        expect(paredeDeTeste2.getWindowsArea).to.be.a('function');
      });

      it('Método deve retornar 2.40m²', () => {
        expect(paredeDeTeste2.getWindowsArea()).to.be.equal(2.4);
      });
    });

    describe('Método que retorna a área "pintável" da parede', () => {
      it('Método deve existir no protótipo', () => {
        expect(Wall.prototype).to.haveOwnProperty('getPaintableArea');
      });

      it('Método deve ser uma função', () => {
        expect(paredeDeTeste2.getPaintableArea).to.be.a('function');
      });

      it('Método deve retornar 26.08m²', () => {
        expect(paredeDeTeste2.getPaintableArea()).to.be.equal(26.08);
      });
    });
  });

  describe('Deve retornar erros', () => {
    it('Caso a parede tenha menos que 1m de altura', () => {
      expect(() => new Wall(0.9, 2, 0, 0)).to.throw(Error);
    });

    it('Caso a parede tenha mais que 15m de altura', () => {
      expect(() => new Wall(16, 2, 0, 0)).to.throw(Error);
    });

    it('Caso a parede que tenha porta seja menos que 30cm maior que a porta', () => {
      expect(() => new Wall(2.1, 5, 1, 0)).to.throw(Error);
    });

    it('Caso o total da área de portas e janelas seja mais que 50% da área da parede', () => {
      expect(() => new Wall(3, 2, 1, 1)).to.throw(Error);
    });
  });
});
