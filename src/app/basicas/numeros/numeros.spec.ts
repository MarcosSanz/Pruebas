import { incrementar } from './numeros';

describe('Pruebas de números: ', () => {

  it('Debe devolver 100, si el número ingresado es mayor que 100', () => {

    const res = incrementar(300);
    expect(res).toBe(100);
  });

  it('Debe devolver el número ingresado más 1, sino es mayor que 100', () => {

    const res = incrementar(50);
    expect(res).toBe(51);
  });

});
