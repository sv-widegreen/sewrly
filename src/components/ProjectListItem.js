import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import editIcon from '../assets/editIcon.svg'
import Button from './Button'
import ProjectUpdateForm from './ProjectUpdateForm'

export default function ProjectListItem({ projectData, updateProjectData }) {
  const [isEditing, setEditing] = useState(false)
  const {
    id,
    projectName,
    pattern,
    size,
    nextStep,
    materialNeeds,
    materialsExisting,
  } = projectData

  return (
    <Link to={`projects/${projectName}/${id}`}>
      <StyledProject>
        {isEditing ? (
          <>
            <ProjectUpdateForm
              projectData={projectData}
              updateProjectData={updateProjectData}
              setEditing={setEditing}
            />
          </>
        ) : (
          <div>
            <p name="projectName">{projectName}</p>
            {pattern ? <p name="pattern">{pattern}</p> : ''}
            {size ? <p name="size">Size: {size}</p> : ''}
            <p name="nextStep">Next step: {nextStep}</p>
            {materialNeeds ? (
              <p name="materials">
                Materials I need: <br></br>
                {materialNeeds}
              </p>
            ) : (
              ''
            )}
            {materialsExisting ? (
              <p name="materials">
                Materials I have: <br></br>
                {materialsExisting}
              </p>
            ) : (
              ''
            )}
            <Button
              size="30px"
              icon={editIcon}
              onClick={() => setEditing(true)}
            />
          </div>
        )}
      </StyledProject>
    </Link>
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

    &[name='materials'] {
      padding: 0 24px 14px 24px;
    }
  }

  button {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`
