import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('user visits {string} url', url => {
   cy.visit(url)
      .url()
      .should('include', '/homePage');
});

Then('h1 tag should be visible and contain text {string}', title => {
   cy.get('h1')
      .should('be.visible')
      .should('include.text', title);
});

When('user finds Home Page anchor tag', () => {
   cy.get(':nth-child(1) > a')
      .should('contain.text', 'Home Page') ;
 });

And('user click on Home Page anchor tag', () => {
 cy.get(':nth-child(1) > a')
   .click();
});

Then('url shoul be {string}', url => {
  cy.url()
     .should('include', url);
});

When('user finds Add New List anchor tag', () => {
   cy.get(':nth-child(2) > a')
      .should('contain.text', 'Add New List Item');
 });

And('user clicks on Add New List anchor tag', () => {
 cy.get(':nth-child(2) > a')
   .click();
});

Then('url should be redirected to {string}', url => {
  cy.url()
     .should('include', url);
});


