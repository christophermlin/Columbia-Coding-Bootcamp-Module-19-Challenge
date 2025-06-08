describe('Tech Quiz App E2E', () => {
  it('should allow a user to take the quiz and see their score', () => {
    cy.intercept('GET', '/api/questions/random', (req) => {
      // Debug log to confirm intercept
      // eslint-disable-next-line no-console
      console.log('Intercepted /api/questions/random');
      req.reply({ fixture: 'questions.json' });
    }).as('getQuestions');
    cy.visit('/');
    cy.get('[data-cy=start]').click();
    cy.wait('@getQuestions');
    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy=question]').should('exist');
      cy.get('[data-cy=option]').first().click();
    }
    cy.get('[data-cy=quiz-over]').should('exist');
    cy.get('[data-cy=score]').should('exist');
    cy.get('[data-cy=start-new]').click();
    cy.get('[data-cy=question]').should('exist');
  });
});