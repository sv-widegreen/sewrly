/// <reference types="cypress" />

describe('add new project', () => {
  it('should create a new project', () => {
    cy.visit('http://localhost:3000')
    cy.get('[name="projectName"]').type('Summer dress with sleeves')
    cy.get('[name="pattern"]').type('Pinterest')
    cy.get('[name="size"]').type('38')
    cy.get('[name="nextStep"]').type(
      'cut fabric and lining, buy button, zipper and tape'
    )
    cy.get('button').click()
    cy.get('li')
      .children('[name="projectName"]')
      .contains('Summer dress with sleeves')
    cy.get('li').children('[name="pattern"]').contains('Pinterest')
    cy.get('li').children('[name="size"]').contains('38')
    cy.get('li')
      .children('[name="nextStep"]')
      .contains('cut fabric and lining, buy button, zipper and tape')
  })

  it('should fail with no project name input', () => {
    cy.visit('http://localhost:3000')
    cy.get('[name="pattern"]').type('Pinterest')
    cy.get('[name="size"]').type('38')
    cy.get('[name="nextStep"]').type(
      'cut fabric and lining, buy button, zipper and tape'
    )
    cy.get('button').click()
    cy.get('label')
      .children('[name="projectName"]')
      .siblings('div')
      .contains('Surely you can think of a name for your project!')
  })

  it('should fail with no next step input', () => {
    cy.visit('http://localhost:3000')
    cy.get('[name="projectName"]').type('Summer dress with sleeves')
    cy.get('[name="pattern"]').type('Pinterest')
    cy.get('[name="size"]').type('38')
    cy.get('button').click()
    cy.get('label')
      .children('[name="nextStep"]')
      .siblings('div')
      .contains('This is the reason why you are using this app!')
  })

  it('should fail because inputs are too long, failed cypress test expected', () => {
    cy.visit('http://localhost:3000')
    cy.get('[name="projectName"]').type(
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
    cy.get('button').click()
    cy.get('#root').children('header').contains('Projects')
  })
})
