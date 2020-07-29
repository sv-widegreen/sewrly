import React from 'react'
import styled from 'styled-components'

export default function ShoppingListItem({ projectData }) {
  const { projectName, materials } = projectData

  return (
    <>
      {materials ? (
        <StyledProject>
          <p name="materials">
            Materials: <br></br>
            {materials}
          </p>
          <p name="projectName">for project: {projectName}</p>
        </StyledProject>
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
  height: 100%;
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
`
