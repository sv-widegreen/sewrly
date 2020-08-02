import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import addIcon from '../assets/addIcon.svg'
import navBarIconFabricCalc from '../assets/navBarIconFabricCalc.svg'
import navBarIconProjects from '../assets/navBarIconProjects.svg'
import navBarIconShoppingList from '../assets/navBarIconShoppingList.svg'

export default function NavigationBar() {
  return (
    <StyledNavigationBar>
      <NavLink to="/fabric-calculator" activeClassName="selected">
        <img src={navBarIconFabricCalc} alt="fabric calculator" />
        <p>Fabric Calc</p>
      </NavLink>
      <NavLink to="/shopping-list" activeClassName="selected">
        <img src={navBarIconShoppingList} alt="to shopping list" />
        <p>Shopping List</p>
      </NavLink>
      <NavLink to="/projects" activeClassName="selected">
        <img src={navBarIconProjects} alt="back to projects" />
        <p>Projects</p>
      </NavLink>
      <NavLink to="/add-new-project" activeClassName="selected">
        <img src={addIcon} alt="add new project" />
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

  img {
    width: 40px;

    :active {
      transform: scale(0.9, 0.9);
    }
  }
`
