
Cypress.Commands.add('getphone', () => {

    cy.visit('/index.html')
    cy.get('[onclick="byCat(\'phone\')"]').click()

});

Cypress.Commands.add('getportable', () => {

    cy.visit('/index.html')
    cy.get('[onclick="byCat(\'notebook\')"]').click()

});

Cypress.Commands.add('getmonitors', () => {

    cy.visit('/index.html')
    cy.get('[onclick="byCat(\'monitor\')"]').click()

});

Cypress.Commands.add('validcategory', () => {

    cy.visit('/index.html')
    cy.get('.list-group-item')

    cy.get('.list-group').should('contain', 'Phones');
    cy.get('.list-group').should('contain', 'Laptops');
    cy.get('.list-group').should('contain', 'Monitors');

});