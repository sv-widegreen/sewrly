import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrowRight from '../../assets/arrowRight.svg'

ShoppingListItem.propTypes = {
  projectData: PropTypes.object,
}

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
    color: var(--teal-light);
    font-size: 16px;

    &[name='materials'] {
      padding: 12px 15px 10px 18px;
      color: var(--teal-dark);
      font-size: 18px;
    }

    &[name='projectName'] {
      padding: 0 7px 14px 18px;
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
