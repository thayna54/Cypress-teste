describe('Acessar site e validar texto de apresentação', () => {
    
        it('Acessar site', () => {
            cy.visit('http://automationpractice.com/index.php')       
        });
        it('Validar texto', () => {
            cy.contains('Automation Practice Website')   
            cy.get('.logo')
            cy.get('#contact-link > a')
        });

    });
    