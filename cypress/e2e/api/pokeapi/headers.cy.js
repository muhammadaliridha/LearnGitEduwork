describe('Validate Header',()=>{

    it('successfully validate header content type',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').should((response) => {
            // Validate status code
            expect(response.status).to.eq(200)

            // Validate header content type
            expect(response.headers['content-type']).to.include('application/json; charset=utf-8')

            // Validate response body - check ability name
            expect(response.body.abilities).to.be.an('array')
            expect(response.body.abilities[0].ability.name).to.eq('limber')
    })
})

it('successfully validate status code',()=>{
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
    cy.get('@ditto').its('status').should('equal',200)
})

it('Successfully validate status code with params',()=>{
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2&per_page=1&delay=3'
    }).as('users')
    cy.get('@users').its('status').should('equal',200)
    })

    it('Successfully validate content',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include',{name: 'bulbasaur'})
    })

    it('successfully validate content for task', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto')
            .should((response) => {
                // Validate content (Limber)
                expect(response.body.abilities[0].ability.name).to.eq('limber')
            })
    })

    it.only('Successfully validate negative response',()=>{
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false
        }).as('eduwork')
        cy.get('@eduwork').its('status').should('equal',404)
        })
})