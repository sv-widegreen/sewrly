/// <reference types="cypress" />

context('Local Storage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('cy.clearLocalStorage() - clear all data in local storage', () => {
    cy.get('button')
      .click()
      .should(() => {
        expect(localStorage.getItem('projects')).to.eq(
          '[{"projectName":"Summer dress with sleeves", "pattern":"", "size":"", "nextStep":"cut fabric and lining, buy button, zipper and tape"}]'
        )
      })

    cy.clearLocalStorage().should((localStorage) => {
      expect(localStorage.getItem('projects')).to.be.null
    })
  })
})
