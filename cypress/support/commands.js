Cypress.Commands.add('selectOneProduct', (articulo, cantidad) => {
    const quickFindTextbox = '[type="text"]';
    const quickFindButton = '[type="image"]';
    const buyNowButton = '#tdb4 > .ui-button-text';
    const productQuantityTextbox = '[valign="top"] > [type="text"]';
    const updateButton = '#tdb4 > .ui-button-text';
    const checkOutButton = '#tdb5 > .ui-button-text';
    cy.get(quickFindTextbox).type(articulo);
    cy.get(quickFindButton).click();
    cy.get(buyNowButton).click();
    cy.get(productQuantityTextbox).clear().type(cantidad);
    cy.get(updateButton).click();
    cy.get(productQuantityTextbox).should('have.value', cantidad); // Quantity assertion
    cy.get(checkOutButton).click();
});

Cypress.Commands.add('login', (usuario, password) => {
    const userTextBox = ':nth-child(1) > .fieldValue > input';
    const passwordTextBox = ':nth-child(2) > .fieldValue > input';
    const signInButton = '#tdb1 > .ui-button-text';
    cy.get(userTextBox).type(usuario);
    cy.get(passwordTextBox).type(password);
    cy.get(signInButton).click();
});

Cypress.Commands.add('confirmOrderCoDPayment', () => {
    const deliveryContinueButton = '#tdb6 > .ui-button-text';
    const cashOnDeliveryButton = ':nth-child(1) > tbody > .moduleRow > [align="right"] > input';
    const paymentContinueButton = '#tdb6 > .ui-button-text';
    const confirmOrderButton = '#tdb5 > .ui-button-text';
    cy.get(deliveryContinueButton).click();
    cy.get(cashOnDeliveryButton).click();
    cy.get(paymentContinueButton).click();
    cy.get(confirmOrderButton).click();
    cy.get('h1').should('have.text', 'Your Order Has Been Processed!').and('be.visible'); // Message assertion;
});
