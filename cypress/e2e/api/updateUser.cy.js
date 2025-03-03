describe('Update User',()=>{
    it('successfully uodate user',()=>{
        var user =
            {
                "name": "suherman",
                "job": "QA Automation"
            }
            cy.request('PUT','https://reqres.in/api/users/2',user).then((response)=>{
                expect(response.status).equal(200)
                expect(response.body.name).to.eq(user.name)
                cy.log(JSON.stringify(response.body))
            })
    })
})