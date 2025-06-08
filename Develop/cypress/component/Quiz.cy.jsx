import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders and allows user to take the quiz', () => {
    cy.mount(<Quiz />);
    cy.get('[data-cy=start]').click();
    cy.get('[data-cy=question]').should('exist');
    cy.get('[data-cy=option]').first().click();
    cy.get('[data-cy=question]').should('exist');
    cy.get('[data-cy=option]').last().click();
    cy.get('[data-cy=quiz-over]').should('exist');
    cy.get('[data-cy=score]').should('exist');
    cy.get('[data-cy=start-new]').click();
    cy.get('[data-cy=question]').should('exist');
  });
});