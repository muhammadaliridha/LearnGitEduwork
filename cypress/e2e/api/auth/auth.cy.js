describe('Basic Auth', ()=>{

    it('succesfully login by appending username and password in URL',()=>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text','Congratulations! You must have the proper credentials')
        cy.log()
    })


    it('successfully login using headers',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            headers:{
                authorization:'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        })
        cy.get('p').should('include.text','Congratulations! You must have the proper credentials')
    })
  
    it('should log in via API Command', () => {
        // Call the custom command to log in via API
        cy.fixture('user.json').then((user) => {
            cy.loginViaAPI(user.userEmail, user.userPassword); // Pass username & password from user.json
        });
    });
})
    