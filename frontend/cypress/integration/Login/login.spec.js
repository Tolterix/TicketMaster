describe('Login page', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('should contain a form', () => {
        cy.get('#login-form').should('exist');
    });

    describe('#login-form', () => {
        var loginForm;
        beforeEach(() => {
            loginForm = cy.get('form#login-form');
        });

        it('should contain a label for email', () => {
            loginForm.get('label[for="email"]').should('contain', 'Email:');
        });

        it('should contain a text input for email', () => {
            loginForm.get('input#email[name="email"]').should('exist');
        });

        it('should contain a label for password', () => {
            loginForm.get('label[for="password"]').should('contain', 'Password:');
        });

        it('should contain a password input for password', () => {
            loginForm.get('input#password[name="password"]').should('exist');
        });

        it('should contain a button to login', () => {
            loginForm.get('button#login').should('exist');
        });
    });
});
