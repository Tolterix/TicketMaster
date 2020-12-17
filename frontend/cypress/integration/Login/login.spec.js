describe('Login page', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('should contain a form', () => {
        cy.get('#login-form').should('exist');
    });

    describe('#login-form', () => {
        it('should contain a label for email', () => {
            const loginForm = cy.get('form#login-form');
            loginForm.get('label[for="email"]').should('contain', 'Email:');
        });

        it('should contain a text input for email', () => {
            const loginForm = cy.get('form#login-form');
            loginForm.get('input#email[name="email"]').should('exist');
        });

        it('should contain a label for password', () => {
            const loginForm = cy.get('form#login-form');
            loginForm.get('label[for="password"]').should('contain', 'Password:');
        });

        it('should contain a password input for password', () => {
            const loginForm = cy.get('form#login-form');
            loginForm.get('input#password[name="password"]').should('exist');
        });
    });
});
