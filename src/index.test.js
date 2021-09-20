const add = (a, b) => a + b;

const users = ['roman', 'kasia', 'asia', 'paweł'];

it('Adds two values', () => {
  expect(add(3, 2)).not.toBe(4);
});

it('contain specific users', () => {
  expect(users).toContain('roman');
  expect(users).not.toContain('apples');
});
