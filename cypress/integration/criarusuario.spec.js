describe('Acessar site e validar texto de apresentação', () => {
    
        it('Acessar site', () => {
            cy.visit('http://automationpractice.com/index.php')       
        });

        it('Cadastrar novo usuário sem e-mail', () => {
            cy.get('.login').click()
            cy.get('#SubmitCreate > span').click()
            cy.contains('Invalid email address.')
        });

        it('Cadastrar usuário com e-mail inválido', () => {

            cy.get('#email_create').click()
            cy.get('#email_create').type('teste.com')
            cy.get('#SubmitCreate > span').click()
            cy.contains('Invalid email address.')
            
        });

        // it('Cadastrar usuário com e-mail válido', () => {
            
            // cy.get('#email_create').click()
            // cy.get('#email_create').type('teste@gmail.com')
            // cy.get('#SubmitCreate > span').click()
            // cy.get('#SubmitCreate').click()
            // cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation')
            // cy.contains('CREATE AN ACCOUNT')
        // });
});
