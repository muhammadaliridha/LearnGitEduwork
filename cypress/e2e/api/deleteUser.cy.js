describe('delete user',()=>{
    it('delete user successfully',()=>{
        cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
            expect(response.status).equal(204)
            cy.log(JSON.stringify(response.body))
        })
    })
})