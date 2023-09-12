
describe('Accessing storeblaze', () => {
    beforeEach(() => {
      cy.visit('/');
      const userData = require('../fixtures/login.json');
      const { username, password } = userData;
      cy.firstlogin(username, password);
    });

    
    it('Get to phone', () => {
      cy.getphone()
      cy.contains('Samsung galaxy s6').should('be.visible').click()
      cy.contains('Add to cart').should('be.visible').click()
      cy.getphone()
      cy.contains('Nokia lumia 1520').should('be.visible').click()
      cy.contains('Add to cart').should('be.visible').click()
      cy.get('#cartur').click()
      cy.get('#tbodyid').find('a').first().click()
      cy.wait(3000)
      cy.modal()
      });
});