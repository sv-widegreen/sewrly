import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import startIconArchive from '../../assets/startIconArchive.svg'
import startIconFabCalc from '../../assets/startIconFabCalc.svg'
import startIconProjects from '../../assets/startIconProjects.svg'
import startIconShoppingList from '../../assets/startIconShoppingList.svg'

export default function NavigationWelcomescreen() {
  return (
    <>
      <StyledHomeNavigation>
        <NavLink to="/archive">
          <img src={startIconArchive} alt="archive" />
        </NavLink>
        <NavLink to="/projects">
          <img src={startIconProjects} alt="projects" />
        </NavLink>
      </StyledHomeNavigation>
      <StyledHomeNavigation>
        <NavLink to="/fabric-calculator">
          <img src={startIconFabCalc} alt="fabric calculator" />
        </NavLink>
        <NavLink to="/shopping-list">
          <img src={startIconShoppingList} alt="shopping list" />
        </NavLink>
      </StyledHomeNavigation>
    </>
  )
}

const StyledHomeNavigation = styled.nav`
  display: flex;
  margin-top: 10px;

  img {
    margin: 0 10px;
    width: 100px;

    :active {
      transform: scale(0.9, 0.9);
    }
  }
`
