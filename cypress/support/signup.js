
Cypress.Commands.add('signup', (username, password) => {

    cy.get('#signin2')
        .click()

    cy.get('#sign-username')
        .type(username, { delay: 50 })

    cy.get('#sign-password')
        .type(password)

    cy.get("button")
        .contains('Sign up')
        .should('be.visible')
        .click()
    }) 