/// <reference types="cypress"/>

 
describe('Home Page', () => {
    it('should display text if list is empty', () => {
      cy.visit('/homePage'); // go to the home page
  
      // get the rocket element and verify that the app name is in it
      cy.get('h1')
        .should('contain.text', 'To do list is currently empty. Please add new item.');
    });

    it('should find  Home Page anchor tag  and click on it', () => {
        cy.visit('/homePage')
            .get(':nth-child(1) > a')
            .click()
            .wait(2000);
    });

    it('should find Add New List Item  anchor tag  and click on it', () => {
        cy.visit('/homePage')
            .get(':nth-child(2) > a')
            .wait(4000)
            .click();
    });
  });