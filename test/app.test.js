const { app } = require('..');

test('Example Test', () =>
{
    expect(app(['Input String Array'])).toEqual(['Output String Array']);
});
