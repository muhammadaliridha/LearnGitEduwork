class LoginPage {

    typeUserName(value) {
        return cy.get('#user_login').type(value)
    }

    typePassword(value) {
        return cy.get('#user_password').type(value)
    }

    clickRemeberMe() {
        return cy.get('#user_remember_me').click()
    }

    clickSigninButton() {
        cy.get('.btn').click()
    }
}

export default LoginPage

