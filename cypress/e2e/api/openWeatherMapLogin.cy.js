describe('Login to OpenWeatherMap via API', () => {
    beforeEach(() => {
      cy.loginViaAPI(); // Memanggil command sebelum setiap test
    });
  
    it('should visit the OpenWeatherMap dashboard after login', () => {
      cy.url().should('eq', 'https://home.openweathermap.org/'); // Pastikan halaman dashboard
      cy.getCookie('_openweather_session').should('exist'); // Cek apakah session cookie ada
    });
  });
  