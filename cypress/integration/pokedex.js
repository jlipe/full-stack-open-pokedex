describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can visit a link', function() {
    cy.get('a[href*="pokemon/kakuna"]').click()
    cy.contains('shed skin')
  })
})