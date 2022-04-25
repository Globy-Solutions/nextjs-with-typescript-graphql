/// <reference types="cypress" />

describe('Page Home', () => {
    before(() => {
        cy.visit('http://localhost:3001/')
    })
    it('Content rendered', () => {
        cy.get('.has-text-centered p').should('contain', 'The source code is licensed')
    })
})