import React from 'react'
import styled from 'styled-components'
import Headline from './Headline'
import LogoHeader from './LogoHeader'
import NavigationBar from './NavigationBar.js'
import ShoppingListItem from './ShoppingListItem'

export default function ShoppingList({ projectList }) {
  const materialsNeeded = projectList.filter((project) => project.materialNeeds)

  return (
    <>
      <LogoHeader />
      <StyledTab>
        <Headline
          headlineText="Shopping list"
          textColor={'var(--copper-ultralight)'}
        />
        <div>
          {materialsNeeded.length <= 0 ? (
            <p className="noMaterialNeedsYet">
              Create a material list in one of your projects first!
            </p>
          ) : (
            <StyledShoppingList>
              {materialsNeeded.map((projectData) => (
                <ShoppingListItem
                  key={projectData.id}
                  projectData={projectData}
                />
              ))}
            </StyledShoppingList>
          )}
        </div>
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

  .noMaterialNeedsYet {
    color: var(--copper-ultralight);
    width: 200px;
    text-align: center;
    padding-top: 200px;
  }

  > div {
    height: 480px;
    overflow: scroll;
  }
`

const StyledShoppingList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  a:first-child {
    margin-bottom: 35px;
  }
`
