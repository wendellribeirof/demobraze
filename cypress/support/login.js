
Cypress.Commands.add('firstlogin', (username, password) => {

    cy.get('#login2')
        .click()

    cy.get('#loginusername')
        .type(username)
    
    cy.get('#loginpassword')
        .type(password)

    cy.get('button')
        .contains('Log in')
        .click()

});

Cypress.Commands.add('logout', () => {

    cy.get('#logout2')
      .should('be.visible')
      .click()

});

Cypress.Commands.add('logininvalid', (username, password) => {

    cy.get('#login2')
        .click()

    cy.get('#loginusername')
        .type(username)

    cy.get('#loginpassword')
        .type(password)

    cy.get('button')
        .contains('Log in')
        .click()

})