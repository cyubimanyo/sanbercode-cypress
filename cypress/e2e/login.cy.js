describe('Login Test Cases', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Login Success', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.get('#appointment').should('be.visible')
  })

  it('Login with Invalid Username', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('Andhiny Fatikha')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.get('p').should(($p) => {
      expect($p).to.contain('Login failed! Please ensure the username and password are valid.')
    })
  })

  it('Login with Invalid Password', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('Test123!')
    cy.get('#btn-login').click()
    cy.get('p').should(($p) => {
      expect($p).to.contain('Login failed! Please ensure the username and password are valid.')
    })
  })

  it('Login with Invalid Username and Password', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('Andhiny Fatikha')
    cy.get('#txt-password').type('Test123!')
    cy.get('#btn-login').click()
    cy.get('p').should(($p) => {
      expect($p).to.contain('Login failed! Please ensure the username and password are valid.')
    })
  })
})