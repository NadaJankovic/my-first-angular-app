export const CyElement = (selector: any): any => {

    return (target: any, name: any, descriptor: any) => {
  
        return {
            get: () => {
                return cy.get(selector);
            }
        };
    };
  };
  