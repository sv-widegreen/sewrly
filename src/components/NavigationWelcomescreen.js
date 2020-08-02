import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import startButtonProjects from '../assets/startButtonProjects.svg'
import startButtonShopping2 from '../assets/startButtonShopping2.svg'
import startButtonFabricCalc2 from '../assets/startButtonFabricCalc2.svg'
import Button from './Button'

export default function NavigationWelcomescreen() {
  return (
    <>
      <StyledHomeNavigation>
        <NavLink to="/fabric-calculator">
          <Button
            icon={startButtonFabricCalc2}
            altText="projects"
            size="100px"
          />
        </NavLink>
        <NavLink to="/projects">
          <Button icon={startButtonProjects} altText="projects" size="100px" />
        </NavLink>
        <NavLink to="/shopping-list">
          <Button
            icon={startButtonShopping2}
            altText="shopping list"
            size="100px"
          />
        </NavLink>
      </StyledHomeNavigation>
    </>
  )
}

const StyledHomeNavigation = styled.nav`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`
