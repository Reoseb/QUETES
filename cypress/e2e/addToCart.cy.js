describe('Utilisation de Saucedemo', () =>{
  // connexion
beforeEach(() =>{
  cy.visit('https://www.saucedemo.com')
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
})
  // Remplissage panier d'un objet
it('remplisage panier', () =>{
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  cy.get('.shopping_cart_link').click()
  cy.get('#shopping_cart_container').should('have.text', '1')
})
  // Remplir le formulaire de facturation
it('remplisage formulaire de facturation', () =>{
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type('monPrenom')
  cy.get('[data-test="lastName"]').type('monNOM')
  cy.get('[data-test="postalCode"]').type('59000')
  cy.get('[data-test="continue"]').click()
  cy.screenshot()
  cy.get('[data-test="finish"]').click()
  cy.get('[data-test="back-to-products"]').click()
})
})