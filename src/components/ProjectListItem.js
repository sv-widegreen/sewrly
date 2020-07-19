import React, { useState } from 'react'
import styled from 'styled-components'
import editButton from '../assets/editButton.svg'
import saveButtonDiskTeal from '../assets/saveButtonDiskTeal.svg'
import Button from './Button'
import ProjectUpdateForm from './ProjectUpdateForm'

export default function ProjectListItem({ projectData, updateProjectData }) {
  const [isEditing, setEditing] = useState(false)
  const { projectName, pattern, size, nextStep } = projectData

  return (
    <StyledProject>
      {isEditing ? (
        <>
          <ProjectUpdateForm
            projectData={projectData}
            updateProjectData={updateProjectData}
          />
          <Button icon={saveButtonDiskTeal} onClick={() => setEditing(false)} />
        </>
      ) : (
        <div>
          <p name="projectName">{projectName}</p>
          {pattern ? <p name="pattern">{pattern}</p> : ''}
          {size ? <p name="size">Size: {size}</p> : ''}
          <p name="nextStep">Next step: {nextStep}</p>
          <Button icon={editButton} onClick={() => setEditing(true)} />
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

  button,
  button > img {
    position: absolute;
    top: 8px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
`
