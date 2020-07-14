import React from 'react'
import styled from 'styled-components'

export default function ProjectListItem({ projectData }) {
  const { projectName, pattern, size, nextStep } = projectData
  return (
    <StyledProject>
      <p name="projectName">{projectName}</p>
      {pattern ? <p name="pattern">{pattern}</p> : ''}
      {size ? <p name="size">Size: {size}</p> : ''}
      <p name="nextStep">Next step: {nextStep}</p>
    </StyledProject>
  )
}

const StyledProject = styled.li`
  position: relative;
  list-style: none;
  width: 300px;
  height: 100%;
  border-radius: 10px;
  background: var(--copper-ultralight);
  margin: 20px 20px 0 20px;

  p {
    font-weight: 200;
    overflow-wrap: break-word;
  }
  [name='projectName'] {
    padding: 12px 24px 10px 24px;
    color: var(--teal-dark);
    font-size: 20px;
  }
  [name='pattern'] {
    padding: 0 24px;
    color: var(--teal-light);
    font-size: 16px;
  }
  [name='size'] {
    padding: 0 24px;
    color: var(--teal-light);
    font-size: 16px;
  }
  [name='nextStep'] {
    padding: 12px 24px 14px 24px;
    color: var(--teal-medium);
    font-size: 16px;
  }
`
