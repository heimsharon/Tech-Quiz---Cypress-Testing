describe('Quiz App E2E', () => {
    // Intercept API call and use fixture data before each test, then visit the homepage
    beforeEach(() => {
        cy.intercept(
            {
                method: 'GET',
                url: '/api/questions/random',
            },
            { fixture: 'questions.json', statusCode: 200 }
        ).as('getRandomQuestions');
        cy.visit('/');
    });

    // Test: Quiz loads and starts when the start button is clicked
    it('should load the quiz and start when button is clicked', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('exist');
        cy.get('h2').should('not.be.empty');
    });

    // Test: User can answer a question and see their score
    it('should answer the question and show the score', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('1').click();
        cy.get('.alert-success').should('exist').and('contain', 'Your score');
    });

    // Test: User can restart the quiz after completion
    it('should allow restarting the quiz after completion', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('1').click();
        cy.get('.alert-success').should('exist');
        cy.get('button').contains('Take New Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
    });
});