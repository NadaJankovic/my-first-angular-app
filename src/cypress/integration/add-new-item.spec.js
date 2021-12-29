/// <reference types="cypress"/>

const { get } = require("http");

describe('AddNewItem', ()=> {
    it('should find and type in title input and content textarea and click submit button', () => {
        cy.visit('/addNewItem')
        .get('kendo-formfield')
        .find('#title')
        .type( 'Title')
        .get('kendo-formfield')
        .find('#content')
        .type( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        .get('.input-save-button')
        .focus()
        .click()
        .wait(1000)
    });

    it('should find and type in title input and content textarea and click cancel button', () => {
        cy.visit('/addNewItem')
        .get('kendo-formfield')
        .find('#title')
        .type( 'Title')
        .get('kendo-formfield')
        .find('#content')
        .type( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        .get('.cancel-button')
        .focus()
        .click()
    });

})