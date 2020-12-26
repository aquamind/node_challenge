const { app } = require('..');

test('Example Test', () =>
{
    expect(app(['Input String Array'])).toBe(['Output String Array']);
});
