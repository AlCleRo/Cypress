const url = '<url>';
const user = '<user>';
const password = '<password>';

describe('TEST CASE 1', () => {
    it('passes', () => {
        const product = 'Samsung Galaxy Tab';
        const quantity = '2';
        cy.visit(url);
        cy.selectOneProduct(product, quantity);
        cy.login(user, password);
        cy.confirmOrderCoDPayment();
    });
});

describe('TEST CASE 2', () => {
    it('passes', () => {
        const product = 'Beloved';
        const quantity = '3';
        cy.visit(url);
        cy.selectOneProduct(product, quantity);
        cy.login(user, password);
        cy.confirmOrderCoDPayment();
    });
});
