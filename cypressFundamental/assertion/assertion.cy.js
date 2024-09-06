describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
      // Mengunjungi halaman contoh Cypress
      cy.visit('https://example.cypress.io')
  
      cy.pause() // Hentikan sementara eksekusi untuk debugging, bisa dihapus jika tidak diperlukan
  
      // Klik elemen yang mengandung teks "type"
      cy.contains('type').click()
  
      // Verifikasi bahwa URL sekarang mengandung '/commands/actions'
      cy.url().should('include', '/commands/actions')
  
      // Mendapatkan input dengan class '.action-email', mengetik email, dan memverifikasi nilainya
      cy.get('.action-email').type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
  })
  