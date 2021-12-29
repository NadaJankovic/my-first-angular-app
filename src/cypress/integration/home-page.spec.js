/// <reference types="cypress"/>

 
describe('Home Page', () => {
    it('should display tesxt if list is empty', () => {
      cy.visit('/homePage'); // go to the home page
  
      // get the rocket element and verify that the app name is in it
      cy.get('h1')
        .should('contain.text', 'To do list is currently empty. Please add new item.');
    });
  });