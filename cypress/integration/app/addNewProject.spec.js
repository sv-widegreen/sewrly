/// <reference types="cypress" />

describe('add new project', () => {
  beforeEach(() => {
    cy.visit('/add-new-project')
  })

  it('should open modal and create a new project with the required information', () => {
    cy.get('[name="projectName"]').type('Summer dress')
    cy.get('[name="nextStep"]').type(
      'cut fabric and lining, buy button, zipper and tape'
    )
    cy.get('button').click()
    cy.get('h4').contains('Wonderful!')
    cy.get('h4').siblings('nav').children('[href="/projects"]').click()
    cy.get('.projectName').contains('Summer dress')
    cy.get('.nextStep').contains(
      'cut fabric and lining, buy button, zipper and tape'
    )
  })

  it('should open modal and create a new project with all information', () => {
    cy.get('[name="projectName"]').type('Summer dress')
    cy.get('[name="nextStep"]').type(
      'cut fabric and lining, buy button, zipper and tape'
    )
    cy.get('[name="pattern"]').type('Pinterest')
    cy.get('[name="size"]').type('36')
    cy.get('[name="materialNeeds"]').type('I need this')
    cy.get('[name="materialsExisting"]').type('I have this')
    cy.get('button').click()
    cy.get('h4').contains('Wonderful!')
    cy.get('h4').siblings('nav').children('[href="/projects"]').click()
    cy.get('ul').children('a').click()
    cy.get('header').contains('Summer dress')
    cy.get('p').contains('cut fabric and lining, buy button, zipper and tape')
    cy.get('p').contains('Pinterest')
    cy.get('p').contains('36')
    cy.get('p').contains('I need this')
    cy.get('p').contains('I have this')
  })

  it('should fail with no project name input and show error message', () => {
    cy.get('[name="nextStep"]').type(
      'cut fabric and lining, buy button, zipper and tape'
    )
    cy.get('button').click()
    cy.get('label')
      .children('[name="projectName"]')
      .siblings('div')
      .contains('Surely you can think of a name for your project!')
  })

  it('should fail with no next step input and show error message', () => {
    cy.get('[name="projectName"]').type('Summer dress')
    cy.get('button').click()
    cy.get('label')
      .children('[name="nextStep"]')
      .siblings('div')
      .contains('This is the reason why you are using this app!')
  })

  it('should fail because inputs are too long, show error messages', () => {
    cy.get('[name="projectName"]').type('Summer dress with sleeves')
    cy.get('[name="nextStep"]').type(
      'cut fabric and lining, buy button, zipper and tapecut fabric and lining, buy button, zipper and tape'
    )
    cy.get('[name="pattern"]').type(
      'PinterestPinterestPinterestPinterestPinterestPinterestPinterestPinterestPinterest'
    )
    cy.get('[name="size"]').type(
      '3838383838383838383838383838383838383838383838383838'
    )
    cy.get('[name="materialNeeds"]').type(
      'Loads of stuff that I dont actually need and that is definitely too long.Loads of stuff that I dont actually need and that is definitely too long.Loads of stuff that I dont actually need and that is definitely too long.Loads of stuff that I dont actually need and that is definitely too long.'
    )
    cy.get('[name="materialsExisting"]').type(
      'Loads of stuff that I dont actually need and that is definitely too long.Loads of stuff that I dont actually need and that is definitely too long.Loads of stuff that I dont actually need and that is definitely too long.Loads of stuff that I dont actually need and that is definitely too long.'
    )
    cy.get('button').click()
    cy.get('label')
      .children('[name="projectName"]')
      .siblings('div')
      .contains('Make it short and sweet!')

    cy.get('label')
      .children('[name="nextStep"]')
      .siblings('div')
      .contains('Please keep it short!')

    cy.get('label')
      .children('[name="pattern"]')
      .siblings('div')
      .contains('The text is too long unfortunately.')

    cy.get('label')
      .children('[name="size"]')
      .siblings('div')
      .contains('Please cut the size of this text!')

    cy.get('label')
      .children('[name="materialNeeds"]')
      .siblings('div')
      .contains('The text is too long ...?')

    cy.get('label')
      .children('[name="materialsExisting"]')
      .siblings('div')
      .contains('Do you really need that much ...?')
  })
})
