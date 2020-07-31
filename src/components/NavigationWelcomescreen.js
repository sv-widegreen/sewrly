import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import projectsNavButton from '../assets/projectsNavButton.svg'
import shoppingNavButton from '../assets/shoppingNavButton.svg'
import Button from './Button'

export default function NavigationWelcomescreen() {
  return (
    <StyledHomeNavigation>
      <NavLink to="/shopping-list">
        <Button icon={shoppingNavButton} altText="shopping list" size="114px" />
      </NavLink>
      <NavLink to="/projects">
        <Button icon={projectsNavButton} altText="projects" size="114px" />
      </NavLink>
    </StyledHomeNavigation>
  )
}

const StyledHomeNavigation = styled.nav`
  display: flex;
  gap: 20px;
  margin-top: 60px;
`
