process.stdin.resume();
process.stdin.setEncoding('utf8');

let lines = []
let reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) =>
{
  lines.push(line);
});

reader.on('close', () =>
{
  app(lines).forEach(l =>
  {
    console.log(l);
  });
});

const app = (args) =>
{
  // Coding here
  return args;
};

module.exports = { app };
