
describe('Accessing storeblaze', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const userData = require('../fixtures/login.json');
  const invalidUserData = require('../fixtures/logininvalid.json');

  it('SignUp', () => { 
    const { username, password } = userData;
    cy.signup(username, password);
  });

  it('Login', () => {
    const { username, password } = userData;
    cy.firstlogin(username, password);
    cy.logout();
  });

  it('Login with invalid user', () => {
    const { username, password } = invalidUserData;
    cy.logininvalid(username, password);
  });
});


  



