/// <reference types="cypress"/>

const { url } = require("inspector");


describe('Testing while on Home Pge', () => {
  beforeEach(() => {
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

describe('Testing while on Add New List item', () => {
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
  it('should type in title and content and click return button', () => {
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
  });

  describe('After form submission', () => {
    beforeEach(() => {
      cy.get('.input-save-button')
        .focus()
        .should('have.class', 'input-save-button')
        .should('be.focused')
        .click()
        .url().should('include', '/homePage')
    });

    it('should find first item in the list and click on it and click on Return button when item details is opened ', () => {
      cy.get('table>tr').eq(0)
        .should('have.length', 1)
        .click()
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
    });

    it('should find and delete first item in the list', () => {
      cy.get('.delete-btn')
        .should('include.text', 'Delete')
        .focus()
        .should('be.focused')
        .wait(2000)
        .click()
        .url().should('include', '/homePage')
        .get('h1')
        .should('include.text', 'To do list is currently empty')
    });

    it('should find and edit first item in the list then cick on return button', () => {
      cy.get('.edit-btn')
        .should('include.text', 'Edit')
        .focus()
        .should('be.focused')
        .click()
        .url()
        .should('include', '/editItem')

        .get('kendo-formfield')
        .find('#title')
        .clear()
        .wait(2000)
        .get('#kendo-error-2')
        .should('be.visible')
        .should('contain.text', 'Title and Content required')
        .get('#kendo-error-3')
        .should('not.exist')
        
        .get('kendo-formfield')
        .find('#title')
        .type('New Title')
        .should('have.value', 'New Title')
        .get('kendo-formfield')
        .find('#content')
        .clear()
        .wait(2000)
        .get('#kendo-error-3')
        .should('be.visible')
        .should('contain.text', 'Title and Content required')
        .get('kendo-formfield')
        .find('#content')
        .type('Test content.')
        .should('include.value', 'Test content')

        .get('.return-button')
        .should('contain.text', 'Return')
        .click()
        .url()
        .should('include', '/homePage')
    });

    it('should find and edit first item in the list then cick on submit button', () => {
      cy.get('.edit-btn')
        .should('include.text', 'Edit')
        .focus()
        .should('be.focused')
        .click()
        .url()
        .should('include', '/editItem')

        .get('kendo-formfield')
        .find('#title')
        .clear()
        .type('New Title')
        .should('have.value', 'New Title')
        .get('kendo-formfield')
        .find('#content')
        .clear()
        .type('Test content.')
        .should('include.value', 'Test content')

        .get('.input-save-button')
        .should('contain.text', 'Submit')
        .click()
        .url()
        .should('include', '/homePage')

        .get('table>tr').eq(0)
        .should('contain.text', 'New Title')
    });
  });
});
