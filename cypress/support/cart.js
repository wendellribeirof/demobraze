
Cypress.Commands.add('modal', () => {

    let name = 'wendell';
    let country = 'brazil';
    let city = 'fortaleza';
    let card = '123456';
    let month = '04';
    let year = '23';
    
    cy.get('button').contains('Place Order').click();
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
    
    cy.get('button').contains('Purchase').click();

    cy.get('.sweet-alert').should('be.visible')

    cy.get('.sweet-alert').should('contain.text', `Name: ${name}`)
    cy.get('.sweet-alert').should('contain.text', `Card Number: ${card}`)
    
});