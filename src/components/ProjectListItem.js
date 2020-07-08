import React from 'react'
import styled from 'styled-components'

export default function ProjectListItem({ projectList }) {
  return (
    <>
      {projectList.map((projectData, index) => {
        const { name, pattern, size, nextStep } = projectData
        return (
          <StyledProject key={name + index}>
            <p name="name">{name}</p>
            {pattern ? <p name="optional">{pattern}</p> : ''}
            {size ? <p name="optional">Size: {size}</p> : ''}
            <p name="nextStep">Next step: {nextStep}</p>
          </StyledProject>
        )
      })}
    </>
  )
}

const StyledProject = styled.li`
  list-style: none;
  width: 325px;
  height: 100%;
  border-radius: 10px;
  background: var(--copper-ultralight);
  margin-top: 20px;

  p {
    font-weight: 200;
  }
  [name='name'] {
    padding: 12px 24px 10px 24px;
    color: var(--teal-dark);
    font-size: 20px;
  }
  [name='optional'] {
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
