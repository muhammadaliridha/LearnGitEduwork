describe('this test is for sutom command task in eduwork', () => {

    beforeEach('visit link', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it('user sould to pay bills', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            //login use command login
            cy.login(username, password)

            //pay bills use command payBills
            cy.payBills()
        })
    })
})