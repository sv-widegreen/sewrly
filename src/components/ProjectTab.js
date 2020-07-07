import React from 'react'
import styled from 'styled-components'
import Headline from './Headline'

export default function ProjectTab({ projectData }) {
  return (
    <StyledTab>
      <Headline
        headlineText={'Projects'}
        textColor={'var(--copper-ultralight)'}
      />
      <StyledProjectList>
        <StyledProject>
          <ul>
            <li name="name">{projectData.name}</li>
            {projectData.pattern ? (
              <li name="optional">{projectData.pattern}</li>
            ) : (
              ''
            )}
            {projectData.size ? (
              <li name="optional">Size: {projectData.size}</li>
            ) : (
              ''
            )}
            <li name="nextStep">Next step: {projectData.nextStep}</li>
          </ul>
        </StyledProject>
      </StyledProjectList>
    </StyledTab>
  )
}

const StyledTab = styled.main`
  margin-top: -18px;
  background: var(--copper-gradient);
  max-width: 667px;
  min-height: 556px;
  border-radius: 20px 20px 0 0;
`
const StyledProject = styled.li`
  list-style: none;
  width: 325px;
  height: 100%;
  border-radius: 10px;
  background: var(--copper-ultralight);
  margin-top: 20px;

  li {
    list-style: none;
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
const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`
