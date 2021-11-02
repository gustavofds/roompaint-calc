const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /api/paint', () => {
  describe('quando é calculado com sucesso', () => {
    let response = {};

    before(async () => {
      response = await chai
        .request(app)
        .post('/api/paint')
        .send([
          {
            height: 2.2,
            width: 2,
            doorCount: 0,
            windowCount: 0,
          },
          {
            height: 2.2,
            width: 2,
            doorCount: 0,
            windowCount: 0,
          },
          {
            height: 2.2,
            width: 2,
            doorCount: 0,
            windowCount: 0,
          },
          {
            height: 2.2,
            width: 2,
            doorCount: 0,
            windowCount: 0,
          },
        ]);
    });

    it('retorna o código de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.an('object');
    });

    it('body de resposta possui propriedade totalPaintableArea', () => {
      expect(response.body).to.be.property('totalPaintableArea');
    });

    it('totalPaintableArea é 17.6m²', () => {
      expect(response.body.totalPaintableArea).to.be.equal(17.6);
    });

    it('body de resposta possui propriedade paintNeeded', () => {
      expect(response.body).to.be.property('paintNeeded');
    });

    it('Quantidade de latas de 18L é 0', () => {
      expect(response.body.paintNeeded.gal18).to.be.equal(0);
    });

    it('Quantidade de latas de 3,6L é 0', () => {
      expect(response.body.paintNeeded.gal3d6).to.be.equal(0);
    });

    it('Quantidade de latas de 2,5L é 1', () => {
      expect(response.body.paintNeeded.gal2d5).to.be.equal(1);
    });

    it('Quantidade de latas de 0,5L é 3', () => {
      expect(response.body.paintNeeded.gal0d5).to.be.equal(3);
    });
  });

  describe('quando são enviados dados inválidos', () => {
    let response = {};

    before(async () => {
      response = await chai
        .request(app)
        .post('/api/paint')
        .send([
          {
            height: 2.1,
            width: 2,
            doorCount: 1,
            windowCount: 0,
          },
          {
            height: 2.2,
            width: 2,
            doorCount: 0,
            windowCount: 0,
          },
          {
            height: 2.2,
            width: 2,
            doorCount: 0,
            windowCount: 0,
          },
          {
            height: 2.2,
            width: 2,
            doorCount: 0,
            windowCount: 0,
          },
        ]);
    });

    it('retorna o código de status 400', () => {
      expect(response).to.have.status(400);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.an('object');
    });

    it('body de resposta possui propriedade message', () => {
      expect(response.body).to.be.property('message');
    });

    it('message possui texto de erro', () => {
      expect(response.body.message).to.be.equal(
        'A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta'
      );
    });
  });
});
