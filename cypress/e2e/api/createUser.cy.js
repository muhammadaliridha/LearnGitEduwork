describe('create a new user', () => {

    var user = {
        "name": "Eduwork",
        "job": "Quaity Assurance Bootcamp"
    }
    it('create new user', () => {
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body).to.have.property('name',user.name)
            expect(response.body).to.have.property('job',user.job)
            cy.log(JSON.stringify(response.body))
        })
    })
})