describe('Study buddy app', () => {
  it('Renders unauthenticated app', () => {
    cy.visit('/');
    cy.findByText(/login/).should('exist');
    cy.findByText(/login/).click().type('teacher@studybuddy.com');
    cy.findByText(/password/)
      .click()
      .type('1234');
    cy.findByText(/Sign in/).click();
    cy.findByText(/Logged as/).should('exist');
  });
});
