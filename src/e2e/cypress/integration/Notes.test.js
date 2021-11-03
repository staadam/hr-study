describe('Notes view', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByText(/login/).should('exist');
    cy.findByText(/login/).click().type('teacher@studybuddy.com');
    cy.findByText(/password/)
      .click()
      .type('1234');
    cy.findByText(/Sign in/).click();
    cy.findByText(/Logged as/).should('exist');
  });

  it('Allows to create a note', () => {
    cy.visit('/notes');
    cy.findByText(/Title/).click().type('Test title');
    cy.findByText(/Content/)
      .click()
      .type('Cypress test content');
    cy.findByText(/Add/).click();
    cy.findAllByText('Cypress test content').should('exist');
  });
});
