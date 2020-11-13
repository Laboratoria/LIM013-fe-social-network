// importamos la funcion que vamos a testear
//import { myFunction } from "../src/lib/index";
import firebasemock from "firebase-mock";

/* describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
}); */

const mockauth = new firebasemock.MockAuthentication();

describe('function de auth', () => {
  test('signUp', () => {
    expect(mockauth('prueba1@gmail.com', 'pruebas'))
    .toHaveBeenCalled();
  });
});
