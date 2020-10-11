/// <reference types="cypress" />

context('Local Storage', () => {
  beforeEach(() => {
    cy.visit('/add-new-project')
  })

  it('should write in localStorage', () => {
    cy.get('[name="projectName"]').type('Summer dress')
    cy.get('[name="nextStep"]').type('cut fabric')
    cy.get('button')
      .click()
      .should(() => {
        expect(localStorage.getItem('projects')).to.contain(
          '[{"projectName":"Summer dress","nextStep":"cut fabric"}]'
        )
      })
  })
})
