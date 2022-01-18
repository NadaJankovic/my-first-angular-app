import { CyElement } from '../decorators/Element';

export class TestingHomePage {

    @CyElement ('h1')
    emptyListTag: any;

    goToUrl (url: string): void {
        cy.visit(url)
    };

    checkValue(element: any, value:string) {
        element.find('h1').should('have.value', value);
      }
}
