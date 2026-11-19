
const soma = require('./soma');

describe('Teste da função soma', () => {
  test('soma 2 + 3 e retorna 5', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('soma 10 + 5 e retorna 15', () => {
    expect(soma(10, 5)).toBe(15);
  });

  test('soma 0 + 0 e retorna 0', () => {
    expect(soma(0, 0)).toBe(0);
  });
});
