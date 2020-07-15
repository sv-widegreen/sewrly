import React, { useState } from 'react'
import styled from 'styled-components'
import editButton from '../assets/editButton.svg'
import saveButtonClosed from '../assets/saveButtonClosed.svg'
import Button from './Button'

export default function ProjectListItem({ projectData }) {
  const { projectName, pattern, size, nextStep } = projectData
  const [isEditing, setEditing] = useState(false)
  const [projectNames, setProjectNames] = useState([projectName])
  console.log(projectNames)

  return (
    <StyledProject>
      {isEditing ? (
        <div>
          <input
            name="projectName"
            value={projectNames}
            onChange={(e) => setProjectNames(e.target.value)}
          ></input>
          {pattern ? (
            <input
              name="pattern"
              value={pattern}
              onChange={(e) => setProjectNames(e.target.value)}
            ></input>
          ) : (
            ''
          )}
          {size ? (
            <input
              name="size"
              value={size}
              onChange={(e) => setProjectNames(e.target.value)}
            ></input>
          ) : (
            ''
          )}
          <input
            name="nextStep"
            value={nextStep}
            onChange={(e) => setProjectNames(e.target.value)}
          ></input>
          <Button icon={saveButtonClosed} onClick={() => setEditing(false)} />
        </div>
      ) : (
        <div>
          <p name="projectName">{projectNames}</p>
          {pattern ? <p name="pattern">{pattern}</p> : ''}
          {size ? <p name="size">{size}</p> : ''}
          <p name="nextStep">{nextStep}</p>
          <Button
            icon={editButton}
            onClick={() => {
              setEditing(true)
            }}
          />
        </div>
      )}
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

  input {
    background: var(--copper-ultralight);
    font-weight: 200;
    overflow-wrap: break-word;
    width: 250px;
    border-radius: 10px;
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

  button,
  img {
    position: absolute;
    top: 8px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
`
