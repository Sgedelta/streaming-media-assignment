const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};
module.exports.getIndex = getIndex;

const pageTwo = fs.readFileSync(`${__dirname}/../client/client2.html`);

const getPageTwo = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(pageTwo);
  response.end();
};
module.exports.getPageTwo = getPageTwo;

const pageThree = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getPageThree = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(pageThree);
  response.end();
};
module.exports.getPageThree = getPageThree;
