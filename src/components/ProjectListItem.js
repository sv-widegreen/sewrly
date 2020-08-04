import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import arrowRight from '../assets/arrowRight.svg'

export default function ProjectListItem({ projectData }) {
  const { url } = useRouteMatch()
  const { id, projectName, nextStep } = projectData

  return (
    <StyledLink to={`${url}/${projectName}/${id}`}>
      <StyledProject>
        <p name="projectName">{projectName}</p>
        <p name="nextStepTitle">Next step:</p>
        <p name="nextStep">{nextStep}</p>
        <img src={arrowRight} alt="" />
      </StyledProject>
    </StyledLink>
  )
}

const StyledProject = styled.li`
  position: relative;
  list-style: none;
  width: 300px;
  border-radius: 10px;
  background: var(--copper-ultralight);
  margin: 20px 20px 0 20px;
  padding: 16px 20px;

  p {
    font-weight: 200;
    font-size: 16px;

    &[name='projectName'] {
      color: var(--teal-dark);
      font-size: 20px;
    }

    &[name='nextStepTitle'] {
      margin-top: 10px;
      color: var(--teal-medium);
    }

    &[name='nextStep'] {
      color: var(--teal-light);
    }
  }

  img {
    position: absolute;
    width: 11px;
    margin-top: -12px;
    top: 50%;
    right: 10px;
    opacity: 0.7;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
