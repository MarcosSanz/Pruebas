import { usuarioLogueado } from './booleanos';

xdescribe('Pruebas de booleanos: ', () => {

  it('Debe devolver true', () => {

    const resp = usuarioLogueado();

    expect(resp).toBeTruthy();
    // Si queremos que sea falso:
    // expect(resp).toBeFalsy();

  });

});
