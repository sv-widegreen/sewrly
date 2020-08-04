import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrowRight from '../assets/arrowRight.svg'

export default function ShoppingListItem({ projectData }) {
  const { id, projectName, materialNeeds } = projectData

  return (
    <>
      {materialNeeds ? (
        <StyledLink to={`/projects/${projectName}/${id}`}>
          <StyledProject>
            <p name="materials">{materialNeeds}</p>
            <p name="projectName">for project: {projectName}</p>
            <img src={arrowRight} alt="" />
          </StyledProject>
        </StyledLink>
      ) : (
        ''
      )}
    </>
  )
}

const StyledProject = styled.li`
  position: relative;
  list-style: none;
  width: 300px;
  border-radius: 10px;
  background: var(--copper-ultralight);
  margin: 20px 20px 0 20px;

  p {
    font-weight: 200;
    width: 260px;
    overflow-wrap: break-word;
    padding: 0 24px;
    color: var(--teal-light);
    font-size: 16px;

    &[name='materials'] {
      padding: 12px 24px 10px 24px;
      color: var(--teal-dark);
      font-size: 18px;
    }

    &[name='projectName'] {
      padding: 0 24px 14px 24px;
    }
  }

  img {
    position: absolute;
    width: 9px;
    bottom: 13px;
    right: 10px;
    opacity: 0.7;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
