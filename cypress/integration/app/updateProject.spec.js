/// <reference types="cypress" />

describe('update a project', () => {
  beforeEach(() => {
    cy.visit('/add-new-project')
    cy.get('[name="projectName"]').type('A')
    cy.get('[name="pattern"]').type('very')
    cy.get('[name="size"]').type('new')
    cy.get('[name="nextStep"]').type('project')
    cy.get('[name="materialNeeds"]').type('to')
    cy.get('[name="materialsExisting"]').type('update')
    cy.get('button').click()
    cy.get('h4').siblings('nav').children('[href="/projects"]').click()
    cy.get('ul').children('a').click()
    cy.get('button').contains('Edit').click()
  })

  it('should update every entry of a project', () => {
    cy.get('[name="nextStep"]').clear().type('sew')
    cy.get('[name="notes"]').type('update')
    cy.get('[name="projectName"]').clear().type('Summer dress')
    cy.get('[name="pattern"]').clear().type('Burda Modell 101')
    cy.get('[name="size"]').clear().type('36')
    cy.get('[name="materialNeeds"]').clear().type('Things I need')
    cy.get('[name="materialsExisting"]').clear().type('Things I have')
    cy.get('button').click()
    cy.get('p').should((p) => {
      expect(p).to.contain('update')
      expect(p).to.contain('Burda Modell 101')
      expect(p).to.contain('36')
      expect(p).to.contain('Things I need')
      expect(p).to.contain('Things I have')
      expect(p).to.contain('sew')
    })
    cy.get('header').should((header) => {
      expect(header).to.contain('Summer dress')
    })
  })

  it('should mark a project as finished', () => {
    cy.get('label').contains('Mark as done:').click()
    cy.get('button').click()
    cy.get('p').should((p) => {
      expect(p).to.contain('finished')
    })
  })

  it('should fail with no project name input', () => {
    cy.get('[name="projectName"]').clear()
    cy.get('button').click()
    cy.get('label')
      .children('[name="projectName"]')
      .siblings('div')
      .should((div) => {
        expect(div).to.contain('Better keep a project name!')
      })
  })

  it('should fail with too long inputs', () => {
    cy.get('[name="nextStep"]')
      .clear()
      .type('cut fabric and lining, buy button, zipper and tapec')
    cy.get('[name="notes"]').type(
      'UpdateupdateupdateupdateupdateupdateupdateupdateupUpdateupdateupdateupdateupdateupdateupdateupdateupUpdateupdateupdateupdateupdateupdateupdateupdateupUpdateupdateupdateupdateupdateupdateupdateupdateupUpdateupdateupdateupdateupdateupdateupdateupdateupUpdateupdateupdateupdateupdateupdateupdateupdateupUpdateupdateupdateupdateupdateupdateupdateupdateupUpdateupdateupdateupdateupdateupdateupdateupdateupUpdateupdateupdateupdateupdateupdateupdateupdateupUpdateupdateupdateupdateupdateupdateupdateupdateupdate'
    )
    cy.get('[name="projectName"]').clear().type('Summer dress with sle')
    cy.get('[name="pattern"]')
      .clear()
      .type('PinterestPinterestPinterestPinterest')
    cy.get('[name="size"]').clear().type('38383838383838383838383838')
    cy.get('[name="materialNeeds"]')
      .clear()
      .type(
        'Things I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I need'
      )
    cy.get('[name="materialsExisting"]')
      .clear()
      .type(
        'Things I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I needThings I need'
      )
    cy.get('button').click()
    cy.get('div').should((errorMessage) => {
      expect(errorMessage).to.contain('Make it short and sweet!')
      expect(errorMessage).to.contain('The text is too long...')
      expect(errorMessage).to.contain('Do you really need that much...?')
      expect(errorMessage).to.contain("Don't make it too long")
      expect(errorMessage).to.contain('The text is too long unfortunately.')
    })
  })
})
