describe('login logout test',()=>{

    beforeEach('visit link',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','/login')
    })

    it('should try to login with invalid data',()=>{
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalud password')       
        cy.get('#user_remember_me').click()
        cy.get('.btn').click()
        cy.get('.alert').should('contain.text','Login and/or password are wrong.')
    })

    it('should login to aaplication with valid data',()=>{
        cy.fixture('user').then(user=>{
            const username = user.username
            const password = user.password
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)       
            cy.get('#user_remember_me').click()
            cy.get('.btn').click()
            cy.get('.brand').should('be.visible')
        })
    })

    it('should logout from the aaplication',()=>{
        cy.fixture('user').then(user=>{
            const username = user.username
            const password = user.password
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)       
            cy.get('#user_remember_me').click()
            cy.get('.btn').click()
            cy.get('.brand').should('be.visible')

            //logout
            cy.get(':nth-child(3) > .dropdown-toggle').click()
            cy.get('#logout_link').click()

            //assertion logout
            cy.get('#signin_button').should('be.visible')
        })
    })

})