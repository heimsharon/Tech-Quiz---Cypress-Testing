import { beforeEach } from 'vitest';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
    beforeEach(() => {
        cy.intercept(
            {
                method: 'GET',
                url: '/api/questions/random',
            },

            { fixture: 'questions.json', statusCode: 200 }
        ).as('getRandomQuestions');
    });

    it('should display the quiz and show the first question', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('exist');
        cy.get('h2').should('not.be.empty');
    });

    it('should answer the questions and complete the quiz', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('1').click();
        cy.get('.alert-success').should('exist').and('contain', 'Your score');
    });

    it('should restart the quiz after completion', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('Restart Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('h2').should('not.be.empty');
    });
});
