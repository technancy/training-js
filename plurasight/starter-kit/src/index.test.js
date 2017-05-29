import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Test test', () => {
  it('is true', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('says hello', (done) => {
    // arrange
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
      //act
      const h1 = window.document.getElementsByTagName('h1')[0];
      //assert
      expect(h1.innerHTML).to.equal("Inturneps");
      done();
      window.close();
    });
  });
});
