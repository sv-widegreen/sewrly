import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import addButtonStrong from '../assets/addButtonStrong.svg'
import homeButton from '../assets/homeButton.svg'
import projectsNavBar from '../assets/projectsNavBar.svg'
import shoppingCartNavBar from '../assets/shoppingCartNavBar.svg'
import Button from './Button'

export default function NavigationBar() {
  return (
    <StyledNavigationBar>
      <NavLink exact to="/" activeClassName="selected">
        <Button icon={homeButton} altText="back to start" />
        <p>Home</p>
      </NavLink>
      <NavLink to="/shopping-list" activeClassName="selected">
        <Button icon={shoppingCartNavBar} altText="to shopping list" />
        <p>Shopping List</p>
      </NavLink>
      <NavLink to="/projects" activeClassName="selected">
        <Button icon={projectsNavBar} altText="back to projects" />
        <p>Projects</p>
      </NavLink>
      <NavLink to="/add-new-project" activeClassName="selected">
        <Button icon={addButtonStrong} altText="add new project" />
        <p>New Project</p>
      </NavLink>
    </StyledNavigationBar>
  )
}

const StyledNavigationBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border-radius: 20px 20px 0 0;
  /*teal medium shadow */
  box-shadow: 0 -2px 4px -1px rgba(32, 95, 89, 0.3);
  width: 100vw;
  padding: 5px;
  position: fixed;
  bottom: 0;
  z-index: 5;
  background: linear-gradient(to bottom, var(--copper-ultralight) 50%, #e3ded8);

  a {
    font-size: 10px;
    color: var(--teal-dark);
    text-decoration: none;
  }

  .selected {
    color: var(--teal-light);
    opacity: 0.7;
  }
`
