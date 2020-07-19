import React from 'react'
import styled from 'styled-components'

export default function ProjectUpdateForm({ projectData, updateProjectData }) {
  const { id, projectName, pattern, size, nextStep } = projectData
  return (
    <StyledForm>
      <label>
        <textarea
          name="projectName"
          value={projectName || ''}
          placeholder="Better think of a project name!"
          onChange={(event) => updateProjectData(event, id)}
        ></textarea>
      </label>

      <label>
        <input
          name="pattern"
          value={pattern || ''}
          placeholder="Did you find a pattern?"
          onChange={(event) => updateProjectData(event, id)}
        ></input>
      </label>

      <label>
        <input
          name="size"
          value={size || ''}
          placeholder="What's the size?"
          onChange={(event) => updateProjectData(event, id)}
        ></input>
      </label>

      <label>
        <textarea
          name="nextStep"
          value={nextStep || ''}
          placeholder="Don't forget to keep track of the next step!"
          onChange={(event) => updateProjectData(event, id)}
        ></textarea>
      </label>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  label {
    display: block;
  }

  input,
  textarea {
    font-weight: 200;
    width: 230px;
    height: 100%;
    border-radius: 6px;
    margin: 2px 4px;
    padding: 0 21px;
    font-family: var(--font-franklin);
    color: var(--teal-ultralight);
    font-size: 16px;

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

    /* Placeholder color was displayed as black in Chrome */
    ::-webkit-input-placeholder {
      color: var(--teal-ultralight);
    }
  }
`
