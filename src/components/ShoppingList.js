import React from 'react'
import styled from 'styled-components'
import Headline from './Headline'
import NavigationBar from './NavigationBar.js'
import ShoppingListItem from './ShoppingListItem'

export default function ShoppingList({ projectList }) {
  return (
    <>
      <StyledTab>
        <Headline
          headlineText="Shopping list"
          textColor={'var(--copper-ultralight)'}
        />
        {projectList.length <= 0 && (
          <p className="noProjectsYet">
            Create a material list in one of your projects first!
          </p>
        )}
        <StyledShoppingList>
          {projectList.map((projectData) => (
            <ShoppingListItem key={projectData.id} projectData={projectData} />
          ))}
        </StyledShoppingList>
      </StyledTab>
      <NavigationBar />
    </>
  )
}

const StyledTab = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
  background: var(--copper-gradient);
  min-height: 556px;
  height: 100%;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -1px 3px -1px rgba(0, 0, 0, 0.3);

  .noProjectsYet {
    color: var(--copper-ultralight);
    width: 200px;
    text-align: center;
    padding-top: 200px;
  }
`

const StyledShoppingList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  li:first-child {
    margin-bottom: 80px;
  }
`
