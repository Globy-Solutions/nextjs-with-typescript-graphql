/// <reference types="cypress" />

context('Cart Shop', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/shop')
    });
    it('Default cart button & list items', () => {
        [
            'cart_shop'
        ].forEach((el) => {
            cy
                .get(`[data-testid=${el}]`)
                .should('be.visible');
        })
    });
    it('Default cart list', () => {
        cy.get('[data-testid=btn-cart_shop]').click().then(() => cy
        .get('[role=list-items]')
        .should('be.visible'))
    })
})
