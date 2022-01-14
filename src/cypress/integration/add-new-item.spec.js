/// <reference types="cypress"/>


describe('AddNewItem', ()=> {
    beforeEach (()=> {
        cy.visit('/addNewItem')
    });

     it('should find and type in title input and content textarea and click return button', () => {
       cy.get('kendo-formfield')
        .find('#title')
        .type( 'Title')
        .get('kendo-formfield')
        .find('#content')
        .type( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        .get('.cancel-button')
        .click()
        .wait(2000)
    });

    it('should find and type in title input and content textarea and click submit button', () => {
        cy.get('kendo-formfield')
            .find('#title')
            .type('Title')
            .get('kendo-formfield')
            .find('#content')
            .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
            .get('.input-save-button')
            .focus()
            .click()
            .wait(2000)
     
            .get('td ')
            .first()
            .click()
            .wait(2000)
            .get('button')
            .click()

            .get('.delete-btn')
            .focus()
            .wait(2000)
            .click()

    });
})