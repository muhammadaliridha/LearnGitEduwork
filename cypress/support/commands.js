// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login',(username, password) =>{
        cy.get('#user_login').clear()
        cy.get('#user_login').type(username)
        cy.get('#user_password').type(password)
        cy.get('.btn').click()
        cy.get('.brand').should('be.visible')
})

Cypress.Commands.add('payBills',()=>{
    cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
    cy.get('.board-header').should('contain','Make payments to your saved payees')

    cy.get('#sp_payee').select('wellsfargo')
    cy.get('#sp_account').select('4')
    cy.get('#sp_amount').type('100')
    cy.get('#sp_date').type('2024-09-07').click()
    cy.get('#sp_description').type('test automation for eduwork task',{force: true})
    cy.get('#pay_saved_payees').click()
    cy.get('#alert_content > span').should('contain','The payment was successfully submitted.')
})

Cypress.Commands.add('loginViaAPI', (userEmail, userPassword) => {
  const basicAuth = 'Basic ' + btoa(`${userEmail}:${userPassword}`);

  cy.request({
      method: 'GET',
      url: 'https://the-internet.herokuapp.com/basic_auth',
      headers: {
          Authorization: basicAuth
      }
  }).then((response) => {
      expect(response.status).to.eq(200);
  });
});
