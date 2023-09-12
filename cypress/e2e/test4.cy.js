
describe('Accessing storeblaze', () => {
    beforeEach(() => {
      cy.visit('/');
      const userData = require('../fixtures/login.json');
      const { username, password } = userData;
      cy.firstlogin(username, password);
    });

    
    it('Valid category', () => {
      cy.getphone()
      cy.getportable()
      cy.getmonitors()

      cy.validcategory()
      });
});