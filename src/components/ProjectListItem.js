import React, { useState } from 'react'
import styled from 'styled-components'
import editButton from '../assets/editButton.svg'
import saveButtonDiskTeal from '../assets/saveButtonDiskTeal.svg'
import Button from './Button'

export default function ProjectListItem({ projectData, updateProjectData }) {
  const [isEditing, setEditing] = useState(false)
  const { id, projectName, pattern, size, nextStep } = projectData

  return (
    <StyledProject>
      {isEditing ? (
        <form>
          <label>
            <textarea
              name="projectName"
              value={projectName}
              onChange={(event) => updateProjectData(event, id)}
            ></textarea>
          </label>
          {pattern ? (
            <label>
              <input
                name="pattern"
                value={pattern}
                onChange={(event) => updateProjectData(event, id)}
              ></input>
            </label>
          ) : (
            ''
          )}
          {size ? (
            <label>
              <input
                name="size"
                value={size}
                onChange={(event) => updateProjectData(event, id)}
              ></input>
            </label>
          ) : (
            ''
          )}
          <label>
            <textarea
              name="nextStep"
              value={nextStep}
              onChange={(event) => updateProjectData(event, id)}
            ></textarea>
          </label>
          <Button icon={saveButtonDiskTeal} onClick={() => setEditing(false)} />
        </form>
      ) : (
        <div>
          <p name="projectName">{projectName}</p>
          {pattern ? <p name="pattern">{pattern}</p> : ''}
          {size ? <p name="size">Size: {size}</p> : ''}
          <p name="nextStep">Next step: {nextStep}</p>
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

  p {
    font-weight: 200;
    width: 260px;
    overflow-wrap: break-word;
    padding: 0 24px;
    color: var(--teal-light);
    font-size: 16px;

    &[name='projectName'] {
      padding: 12px 24px 10px 24px;
      color: var(--teal-dark);
      font-size: 20px;
    }

    &[name='nextStep'] {
      padding: 12px 24px 14px 24px;
      color: var(--teal-medium);
      font-size: 16px;
    }
  }
  input {
    background: white;
    font-weight: 200;
    width: 230px;
    border-radius: 6px;
    margin: 2px 4px;
    padding: 0 21px;
    color: var(--teal-ultralight);
    font-size: 16px;

    }
    :focus {
      outline: none;
      box-shadow: 0 0 0 1pt var(--teal-ultralight);
    }
  }

  textarea {
    background: white;
    font-weight: 200;
    width: 230px;
    height: 100%;
    border-radius: 6px;
    font-family: var(--font-franklin);
    color: var(--teal-ultralight);

    &[name='projectName'] {
      margin: 4px 4px 2px 4px;
      padding: 7px 20px 5px 21px;
      font-size: 20px;
    }

    &[name='nextStep'] {
      margin: 2px 4px 4px 4px;
      padding: 8px 20px 10px 21px;
      font-size: 16px;
    }
    :focus {
      outline: none;
      box-shadow: 0 0 0 1pt var(--teal-ultralight);
    }
  }

  button,
  button > img {
    position: absolute;
    top: 8px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
  label {
    display: block;
  }
`
