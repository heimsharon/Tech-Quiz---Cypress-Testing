import Quiz from '../../client/src/components/Quiz';

// Cypress component tests for the Quiz component
describe('Quiz Component', () => {
    // Intercept API call and use fixture data before each test
    beforeEach(() => {
        cy.intercept(
            {
                method: 'GET',
                url: '/api/questions/random',
            },
            { fixture: 'questions.json', statusCode: 200 }
        ).as('getRandomQuestions');
    });

    // Test: Quiz starts and displays the first question
    it('should display the quiz and show the first question', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('exist');
        cy.get('h2').should('not.be.empty');
    });

    // Test: User can answer a question and see their score
    it('should answer the questions and complete the quiz', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('1').click();
        cy.get('.alert-success').should('exist').and('contain', 'Your score');
    });

    // Test: User can restart the quiz after completion
    it('should restart the quiz after completion', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('1').click();
        cy.get('.alert-success').should('exist');
        cy.get('button').contains('Take New Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
    });
});
