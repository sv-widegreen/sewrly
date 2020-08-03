import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function ProjectListItem({ projectData }) {
  const { id, projectName, nextStep } = projectData

  return (
    <StyledLink to={`/projects/${projectName}/${id}`}>
      <StyledProject>
        <p name="projectName">{projectName}</p>
        <p name="nextStepTitle">Next step:</p>
        <p name="nextStep">{nextStep}</p>
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
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
