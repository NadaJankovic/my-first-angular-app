import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('user visits {string} url', url => {
    cy.visit(url)
        .url()
        .should('include', '/addNewItem');
});

And('user gets {string} tag and user finds {string} in kendo-formfield tag and user types {string} in input field', (kendoFormField, title, titleText) => {
    cy.get(kendoFormField)
        .find(title)
        .type(titleText)
        .should('have.value', 'Title')

});

And('user gets {string} tag and user finds {string} in kendo-formfield tag and user types {string} in texarea', (kendoFormField, context, contextText) => {
    cy.get(kendoFormField)
        .find(context)
        .type(contextText)
        .should('have.value', 'Content')
});

When('user gets {string} and clicks on it', returnBtn => {
    cy.get(returnBtn)
        .should('be.visible')
        .should('have.class', 'return-button')
        .click()
});

Then('url should be {string}', url => {
 cy.url()
   .should('include', url)
});

When('user gets submit btn {string} and clicks on it', submitBtn => {
  cy.get(submitBtn)
    .should('have.class', 'input-save-button')
    .should('be.visible')
    .click()
});

Then('user should be redirected to {string}', url => {
  cy.url()
     .should('include', url)
});
