/// <reference types="cypress"/>

const { url } = require("inspector");


describe('Testing while ulr included /homePage', () => {
  beforeEach(()=> {
    cy.visit('/homePage');
  });

  it('should display text if list is empty', () => {
    cy.get('h1')
      .should('contain.text', 'To do list is currently empty. Please add new item.');
  });

  it('should find  Home Page anchor tag  and click on it', () => {
    cy.get(':nth-child(1) > a')
      .click()
      .should('contain.text', 'Home Page')
      .should('not.contain.text', 'Add New List Item')
      .url().should('include', '/homePage')
      .url().should('eq', 'http://localhost:4200/homePage')
  });

  it('should find Add New List Item  anchor tag  and click on it', () => {
     cy.get(':nth-child(2) > a')
      .click()
      .should('be.visible')
      .should('contain.text', 'Add New List Item')
      .url().should('include', '/addNewItem')
      .url().should('eq', 'http://localhost:4200/addNewItem')
  });
});

describe('Testing when url include /addNewItem', () => {
  beforeEach(() => {
    cy.visit('/addNewItem')
      .get('kendo-formfield')
      .find('#title')
      .type('Title')
      .should('have.focus')
      .should('have.value', 'Title')
      .get('kendo-formfield')
      .find('#content')
      .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
      .should('include.value', 'Lorem ipsum dolor sit amet')
  });
  it('should find and type in title and content and click return button', () => {
    cy
      .get('.return-button')
      .should('have.class', 'return-button')
      .click()
      .url().should('eq', 'http://localhost:4200/homePage')
  });

  it('should type title and content and click submit button', () => {
    cy.get('.input-save-button')
      .focus()
      .should('have.class', 'input-save-button')
      .should('be.focused')
      .click()
      .url().should('include', '/homePage')

      .get('table>tr').eq(0)
      .should('have.length', 1)
      .click()
      .wait(2000)
      .url()
      .url().should('include', '/items')
      .get('.item-details-title')
      .should('include.text', 'Title')
      .get('.item-details-content')
      .should('include.text', 'Lorem ipsum dolor sit amet')
      .get('button')
      .should('include.text', 'Return')
      .click()
      .url().should('include', '/homePage')

      .get('.delete-btn')
      .should('include.text', 'Delete')
      .focus()
      .should('be.focused')
      .wait(2000)
      .click()
      .url().should('include', '/homePage')
      .get('h1')
      .should('include.text', 'To do list is currently empty')
  });

});
