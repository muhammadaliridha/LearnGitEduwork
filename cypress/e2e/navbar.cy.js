describe('navbar link test',()=>{
    beforeEach('visit link',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
    })

    it('should display online banking content',()=>{
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('h1').should('contain.text','Online Banking')
    })

    it('should display feedback content',()=>{
        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
        cy.get('#feedback-title').should('be.visible')
        cy.get('#feedback-title').should('contain.text','Feedback')

    })

    it('should display homepage content',()=>{
        cy.get('.brand').click()
        cy.url().should('include','index.html')
        cy.get('#signin_button').should('contain.text','Signin')
    })
})