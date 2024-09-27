describe('Searchbox Test', function(){
    beforeEach(()=>{
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('Should type into searchbox and submit',()=>{
        cy.get('#searchTerm').type('zero{enter}')
        cy.get('h2').should('contain.text','Search Result')
        cy.get('.top_offset').should('contain.text', 'Zero - ')
    })
})