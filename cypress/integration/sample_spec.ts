import sampleJson from '../../src/samples/simple.json';

const numOfKeys = Object.keys(sampleJson).length;

describe('Visualized data', () => {
  it('checks the number of keys in the sample data', () => {
    cy.visit('/');
    cy.get('#dropdownMenuButton').click();
    cy.get('#paste-sample-json-menu-item').click();
    cy.get('table[data-path="/"] thead tr th.objectType').should(
      'contain',
      `Object [${numOfKeys}]`
    );
  });
});
