describe('Login Test Cases', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Make Appointment Success', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.get('#appointment').should('be.visible')
    cy.get('#combo_facility').select('Tokyo CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').click()
    cy.get('#txt_visit_date').type('09/09/2023')
    cy.get('footer').click()
    cy.get('#txt_comment').type('Testing Aye 123')
    cy.get('#btn-book-appointment').click()
    cy.get('#summary').should('be.visible')
    cy.contains('Go to Homepage').click()
  })
  
  it.only('Make Appointment Failed', () => {
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.get('#appointment').should('be.visible')
    cy.get('#combo_facility').select('Tokyo CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').click()
    cy.get('#btn-book-appointment').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Please fill out this field.`)
    })
  })
})