import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I open login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
})

When('I submit login page', () => {
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('#user_remember_me').click()
    cy.get('.btn').click()
})

Then('I should see homepage', () => {
    cy.url().should('include', 'index.html')
    cy.get('#signin_button').should('contain.text', 'Signin')
})
Given('I open zero bank homepage', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I type "zero" in searchbox', () => {
    cy.get('#searchTerm').type('zero{enter}')
})

Then('I should see search result', () => {
    cy.get('h2').should('contain.text', 'Search Result')
})

Then('the search result contain text zero', () => {
    cy.get('.top_offset').should('contain.text', 'Zero - ')
})

When('I click "online banking"', () => {
    cy.get('#onlineBankingMenu').click()
    cy.url().should('include', 'online-banking.html')
})

Then('I should see online banking page', () => {
    cy.get('h1').should('be.visible')
    cy.get('h1').should('contain.text', 'Online Banking')
})

When('I click "feedback"', () => {
    cy.get('#feedback').click()
    cy.url().should('include', 'feedback.html')
})

Then('I should see feedback page', () => {
    cy.get('#feedback-title').should('be.visible')
    cy.get('#feedback-title').should('contain.text', 'Feedback')
})

When('I click "home"', () => {
    cy.get('#homeMenu').click()
})


