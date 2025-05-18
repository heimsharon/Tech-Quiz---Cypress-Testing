describe('Quiz App E2E', () => {
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

    it('should load the quiz and start when button is clicked', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('exist');
        cy.get('h2').should('not.be.empty');
    });

    it('should answer the question and show the score', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('1').click();
        cy.get('.alert-success').should('exist').and('contain', 'Your score');
    });

    it('should allow restarting the quiz after completion', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('1').click();
        cy.get('.alert-success').should('exist');
        cy.get('button').contains('Take New Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
    });
});