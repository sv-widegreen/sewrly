/// <reference types="cypress" />

context('Local Storage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should write and clear localStorage', () => {
    cy.get('[name="projectName"]').type('Summer dress with sleeves')
    cy.get('[name="pattern"]').type('Pinterest')
    cy.get('[name="size"]').type('38')
    cy.get('[name="nextStep"]').type(
      'cut fabric and lining, buy button, zipper and tape'
    )
    cy.get('button')
      .click()
      .should(() => {
        expect(localStorage.getItem('projects')).to.eq(
          '[{"projectName":"Summer dress with sleeves","pattern":"Pinterest","size":"38","nextStep":"cut fabric and lining, buy button, zipper and tape"}]'
        )
      })

    cy.clearLocalStorage().should((localStorage) => {
      expect(localStorage.getItem('projects')).to.be.null
    })
  })
})
