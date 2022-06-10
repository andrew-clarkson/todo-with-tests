describe('single todo list testing', () => {
  const newItem = 'wash car';

  it('loads page', () => {
    cy.visit('/');
  });

  it('can add new item to each list', () => {
    cy.get('[data-cy="input"]').type(newItem).type('{enter}');
    cy.get('.todolist li')
      .should('have.length', 2)
      .last()
      .should('contain.text', newItem);
  });

  it('can check off item', () => {
    cy.get('.todolist [data-cy="doneButton"]').last().click();
    cy.get('.donelist li')
      .should('have.length', 2)
      .last()
      .should('contain.text', newItem);
    cy.get('.todolist li').should('have.length', 1);
  });

  it('can uncheck item', () => {
    cy.get('.donelist [data-cy="doneButton"]').last().click();
    cy.get('.todolist li')
      .should('have.length', 2)
      .last()
      .should('contain.text', newItem);
    cy.get('.donelist li').should('have.length', 1);
  });

  it('can delete item from todo', () => {
    cy.get('.todolist [data-cy="deleteButton"]').last().click();
    cy.get('.todolist li')
      .should('have.length', 1)
      .should('not.contain.text', newItem);
    cy.get('.donelist li').should('have.length', 1);
  });

  it('can delete item from done', () => {
    cy.get('.donelist [data-cy="deleteButton"]').last().click();
    cy.get('.donelist li').should('not.exist');
    cy.get('.todolist li').should('have.length', 1);
  });
});
