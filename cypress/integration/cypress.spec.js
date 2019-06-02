describe('My First Test', () => {
  it('should add todo', () => {
    //cy.visit('/'); // uses baseUrl in cypress.json
    cy.visit('http://localhost:5000/');

    cy.contains('Add')
      .as('addBtn')
      .should('be.disabled');

    const todoText = 'buy milk';
    cy.get('[data-testid=todo-input]')
      .as('todoInput')
      .type(todoText);
    cy.get('@addBtn').should('not.be.disabled');
    cy.get('@addBtn').click();
    cy.get('@addBtn').should('be.disabled');
    cy.get('@todoInput').should('have.value', '');
    //cy.get(todoText);
    cy.wait(3000);
  });
});
