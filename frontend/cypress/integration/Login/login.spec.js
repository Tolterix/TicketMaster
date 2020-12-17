describe('Login page', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('should contain a form', () => {
        cy.get('#login-form').should('exist');
    });

    describe('#login-form', () => {
        it('should contain a label for email', () => {
            cy.get('#login-form > label[for="email"]').should('contain', 'Email:');
        });

        it('should contain a text input for email', () => {
            cy.get('#login-form > input#email[name="email"]').should('exist');
        });

        it('should contain a label for password', () => {
            cy.get('#login-form > label[for="password"]').should('contain', 'Password:');
        });

        it('should contain a password input for password', () => {
            cy.get('#login-form > input#password[name="password"]').should('exist');
        });

        it('should contain a button to login', () => {
            cy.get('#login-form > input#login[type="submit"][value="Login"]').should('exist');
        });
    });
});
