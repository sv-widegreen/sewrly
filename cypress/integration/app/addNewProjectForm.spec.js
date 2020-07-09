/// <reference types="cypress" />

describe('add new project', () => {
  it('should create a new project', () => {
    cy.visit('http://localhost:3000')
    cy.get('[name="name"]').type('Summer dress with sleeves')
    cy.get('[name="pattern"]').type('Pinterest')
    cy.get('[name="size"]').type('38')
    cy.get('[name="nextStep"]').type(
      'cut fabric and lining, buy button, zipper and tape'
    )
    cy.get('[type="submit"]').click()
  })

  it('should fail with no project name input', () => {
    cy.visit('http://localhost:3000/customers')
    cy.get('[name="pattern"]').type('Pinterest')
    cy.get('[name="size"]').type('38')
    cy.get('[name="nextStep"]').type(
      'cut fabric and lining, buy button, zipper and tape'
    )
    cy.get('[type="submit"]').click()
  })

  it('should fail with no next step input', () => {
    cy.visit('http://localhost:3000/customers')
    cy.get('[name="name"]').type('Summer dress with sleeves')
    cy.get('[name="pattern"]').type('Pinterest')
    cy.get('[name="size"]').type('38')
    cy.get('[type="submit"]').click()
  })

  it('should fail because inputs are too long', () => {
    cy.visit('http://localhost:3000/customers')
    cy.get('[name="name"]').type(
      'Summer dress with sleevesSummer dress with sleeves'
    )
    cy.get('[name="pattern"]').type(
      'PinterestPinterestPinterestPinterestPinterestPinterestPinterestPinterestPinterest'
    )
    cy.get('[name="size"]').type(
      '3838383838383838383838383838383838383838383838383838'
    )
    cy.get('[name="nextStep"]').type(
      'cut fabric and lining, buy button, zipper and tapecut fabric and lining, buy button, zipper and tape'
    )
    cy.get('[type="submit"]').click()
  })
})
